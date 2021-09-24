import { Operation } from "../core";
import { AnyUnit } from "./anyUnit";
import { AnyConversionUnit } from "./conversionUnit";
import { AnySimpleUnit } from "./unit";

type Operations = [Operation, number][];

function calculate(ops: Operations, result = 1): number {
  if (ops.length === 0) return result;
  const [op, n] = ops.shift() as [Operation, number];

  switch (op) {
    case "*":
      return calculate(ops, result * n);
    case "/":
      return calculate(ops, result / n);
    case "^":
      return calculate(ops, Math.pow(result, n));
    case "√":
      switch (n) {
        case 2:
          return calculate(ops, Math.sqrt(result));
        case 3:
          return calculate(ops, Math.cbrt(result));
        default:
          // Beh!
          throw new Error("Ooops");
      }
    // TODO totality
  }
}

function invertOp(op: Operation): Operation {
  switch (op) {
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
  ops: Operations = []
): CalculateConversion<U1, U2> {
  if (u1.name === u2.name) {
    return calculate(ops) as unknown as CalculateConversion<U1, U2>;
  }

  switch (u1.type) {
    case "Unit":
      switch (u2.type) {
        case "Unit":
          throw new ConversionError(u1, u2);

        case "ConversionUnit":
          return convert(u1, u2.conversion.u, [
            ...ops,
            [u2.conversion["op"], u2.conversion["n"]],
          ]) as CalculateConversion<U1, U2>;

        case "ComposedUnit":
          // TODO
          break;
      }
      break;
    case "ConversionUnit":
      switch (u2.type) {
        case "Unit":
          return convert(u1.conversion.u, u2, [
            ...ops,
            [invertOp(u1.conversion["op"]), u1.conversion["n"]],
          ]) as CalculateConversion<U1, U2>;

        case "ConversionUnit":
          return convert(u1.conversion.u, u2.conversion.u, [
            ...ops,
            [invertOp(u1.conversion["op"]), u1.conversion["n"]],
            [u2.conversion["op"], u2.conversion["n"]],
          ]) as CalculateConversion<U1, U2>;

          break;

        case "ComposedUnit":
          // TODO
          break;
      }

      break;
    case "ComposedUnit":
      // TODO
      break;
  }

  throw new ConversionError(u1, u2);
  // return undefined as CalculateConversion<U1, U2>;
}

type CalculateConversion<U1, U2> = U1 extends U2
  ? number
  : U1 extends AnySimpleUnit
  ? U2 extends AnyConversionUnit
    ? CalculateConversion<U1, U2["conversion"]["u"]>
    : ConversionError
  : U1 extends AnyConversionUnit
  ? CalculateConversion<U1["conversion"]["u"], U2>
  : ConversionError;

export class ConversionError extends Error {
  constructor(u1: AnyUnit, u2: AnyUnit) {
    super(`${u1.name} is not compatible with ${u2.name}`);
    // https://github.com/facebook/jest/issues/8279#issuecomment-539775425
    Object.setPrototypeOf(this, ConversionError.prototype);
  }
}
