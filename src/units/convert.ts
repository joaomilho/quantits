import { AnyMeasurement, AnyQuantity, Measurement } from "..";
import {
  AnyUnit,
  Operation,
  AnySimpleUnit,
  AnyConversionUnit,
  Number,
  AnyComposedUnit,
} from "../core";
import { Decimal } from "decimal.js";

type Operations = [Operation, Number][];

function calculate(ops: Operations, result: Number = new Decimal(1)): Decimal {
  if (typeof result === "number") {
    result = new Decimal(result);
  }

  if (ops.length === 0) return result;
  const [op, n] = ops.shift() as [Operation, Number];

  switch (op) {
    case "+":
      return calculate(ops, result.add(n));
    case "-":
      return calculate(ops, result.sub(n));
    case "*":
      return calculate(ops, result.mul(n));
    case "/":
      return calculate(ops, result.div(n));
    case "^":
      return calculate(ops, result.pow(n));
    case "√":
      return calculate(ops, result.pow(new Decimal(1).div(n)));
    // TODO totality, TS has a switch now or something
  }
}

function invertOp(op: Operation): Operation {
  switch (op) {
    case "+":
      return "-";
    case "-":
      return "+";
    case "*":
      return "/";
    case "/":
      return "*";
    case "^":
      return "√";
    case "√":
      return "^";
    // TODO totality
  }
}

export function convert<U1 extends AnyUnit, U2 extends AnyUnit>(
  u1: U1,
  u2: U2,
  ops: Operations = [],
  initialValue: Number = new Decimal(1)
): CalculateConversion<U1, U2> {
  if (typeof initialValue === "number") {
    initialValue = new Decimal(initialValue);
  }

  if (u1.name === u2.name) {
    return calculate(ops, initialValue) as unknown as CalculateConversion<
      U1,
      U2
    >;
  }

  switch (u1.type) {
    case "Unit":
      switch (u2.type) {
        case "Unit":
          throw new ConversionError(u1, u2);

        case "ConversionUnit":
          return convert(
            u1,
            u2.conversion.u,
            [...ops, [invertOp(u2.conversion["op"]), u2.conversion["n"]]],
            initialValue
          ) as CalculateConversion<U1, U2>;
      }
      break;
    case "ConversionUnit":
      return convert(
        u1.conversion.u,
        u2,
        [...ops, [u1.conversion["op"], u1.conversion["n"]]],
        initialValue
      ) as CalculateConversion<U1, U2>;
    case "ComposedUnit":
      switch (u2.type) {
        case "Unit":
          throw new ConversionError(u1, u2);

        case "ConversionUnit":
          // TODO
          break;
        case "ComposedUnit": {
          if (u1.dimension.name !== u2.dimension.name) {
            throw new ConversionError(u1, u2);
          }

          // return convert()

          return u1.composedUnits
            .map((unit: any, index: number) => {
              return convert(unit, u2.composedUnits[index], ops, initialValue);
            })
            .reduce((acc: Decimal, item: Decimal) => {
              if (!acc) return item;
              // TODO what's the relation tho
              return acc.div(item);
            }, 0);

          // u2.composedUnits.map((unit: any) => {
          //   console.log("HERE2", unit);
          // });
        }
      }
      break;
  }

  throw new ConversionError(u1, u2);
}

export function to<U1 extends AnyMeasurement, U2 extends AnyUnit>(
  u1: U1,
  u2: U2
): Decimal {
  return convert(u1.u, u2, [], u1.n) as Decimal;
}

type CalculateConversion<U1 extends AnyUnit, U2 extends AnyUnit> = U1 extends U2
  ? Decimal
  : U1 extends AnySimpleUnit
  ? U2 extends AnyConversionUnit
    ? CalculateConversion<U1, U2["conversion"]["u"]>
    : ConversionError
  : U1 extends AnyConversionUnit
  ? CalculateConversion<U1["conversion"]["u"], U2>
  : U1 extends AnyComposedUnit
  ? Decimal // Yucc, TODO
  : ConversionError;

export class ConversionError extends Error {
  constructor(u1: AnyUnit, u2: AnyUnit) {
    super(`${u1.name} is not compatible with ${u2.name}`);
    // https://github.com/facebook/jest/issues/8279#issuecomment-539775425
    Object.setPrototypeOf(this, ConversionError.prototype);
  }
}
