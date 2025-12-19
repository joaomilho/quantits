import { Big, type BigDecimal, MathContext } from "bigdecimal.js";
import type {
  AnyComposedUnit,
  AnyConversionUnit,
  AnyDimension,
  AnyMeasurement,
  AnySimpleUnit,
  AnyUnit,
  Operation,
} from "./types.js";
import { getDimension, dimensionsCompatible } from "./types.js";

// Use 34 significant digits (IEEE 754-2019 decimal128 precision)
const MATH_CTX = MathContext.DECIMAL128;

type Operations = [Operation, number][];

function calculate(ops: Operations, result: BigDecimal = Big("1")): BigDecimal {
  if (ops.length === 0) return result;
  const [op, n] = ops.shift()!;

  switch (op) {
    case "+":
      return calculate(ops, result.add(Big(n)));
    case "-":
      return calculate(ops, result.subtract(Big(n)));
    case "*":
      return calculate(ops, result.multiply(Big(n)));
    case "/":
      return calculate(ops, result.divideWithMathContext(Big(n), MATH_CTX));
    case "^":
      return calculate(ops, result.pow(n, MATH_CTX));
    case "√":
      // nth root = x^(1/n)
      return calculate(ops, Big(result.numberValue() ** (1 / n)));
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
  }
}

/** Error thrown when attempting to convert between incompatible units */
export class ConversionError extends Error {
  constructor(u1: AnyUnit, u2: AnyUnit) {
    super(`${u1.name} is not compatible with ${u2.name}`);
    Object.setPrototypeOf(this, ConversionError.prototype);
  }
}

/** Type-level result of a conversion operation */
type CalculateConversion<U1 extends AnyUnit | AnyMeasurement, U2 extends AnyUnit> = U1 extends U2
  ? BigDecimal
  : U1 extends AnyMeasurement
    ? BigDecimal
    : U1 extends AnySimpleUnit
      ? U2 extends AnyConversionUnit
        ? CalculateConversion<U1, U2["conversion"]["u"]>
        : ConversionError
      : U1 extends AnyConversionUnit
        ? CalculateConversion<U1["conversion"]["u"], U2>
        : U1 extends AnyComposedUnit
          ? BigDecimal
          : ConversionError;

/**
 * Get the exponent for composed unit conversion based on dimension
 */
function getComposedExponent(dim: AnyDimension): number {
  // Check if this is a power dimension (single base with exponent != 1)
  const exponents = dim.exponents;
  const keys = Object.keys(exponents);
  
  if (keys.length === 1) {
    const exp = exponents[keys[0]!];
    if (exp !== undefined && exp !== 1) {
      return exp;
    }
  }
  
  return 1;
}

/**
 * Get the operation for composed unit based on dimension
 */
function getComposedOperation(dim: AnyDimension): "*" | "/" | "^" {
  const exponents = dim.exponents;
  const keys = Object.keys(exponents);
  
  if (keys.length === 1) {
    const exp = exponents[keys[0]!];
    // Any non-1 exponent (including -1) is a power operation
    if (exp !== undefined && exp !== 1) {
      return "^";
    }
  }
  
  // Check if any exponent is negative (indicating division)
  const values = Object.values(exponents);
  const hasNegative = values.some(v => v < 0);
  const hasPositive = values.some(v => v > 0);
  
  if (hasNegative && hasPositive) {
    return "/";
  }
  
  return "*";
}

/**
 * Convert between units or from a measurement to a unit
 * @param u1 - Source unit or measurement
 * @param u2 - Target unit
 * @returns BigDecimal result of the conversion
 * @throws ConversionError if units are incompatible
 */
export function convert<U1 extends AnyUnit | AnyMeasurement, U2 extends AnyUnit>(
  u1: U1,
  u2: U2,
  ops: Operations = [],
  initialValue = 1
): CalculateConversion<U1, U2> {
  // Handle measurements
  if ("type" in u1 && u1.type === "Measurement") {
    const m = u1 as AnyMeasurement;
    return convert(m.u, u2, [], m.n) as CalculateConversion<U1, U2>;
  }

  const unit1 = u1 as AnyUnit;

  if (unit1.name === u2.name) {
    return calculate(ops, Big(initialValue)) as CalculateConversion<U1, U2>;
  }

  switch (unit1.type) {
    case "Unit":
      switch (u2.type) {
        case "Unit":
          // Check if dimensions are compatible using the new algebra
          if (dimensionsCompatible(unit1, u2)) {
            // Same dimension but different base units - this shouldn't happen
            // for properly constructed units, but handle gracefully
            throw new ConversionError(unit1, u2);
          }
          throw new ConversionError(unit1, u2);

        case "ConversionUnit":
          return convert(
            unit1,
            u2.conversion.u,
            [...ops, [invertOp(u2.conversion.op), u2.conversion.n]],
            initialValue
          ) as CalculateConversion<U1, U2>;

        case "ComposedUnit":
          throw new ConversionError(unit1, u2);
      }
      break;

    case "ConversionUnit":
      return convert(
        unit1.conversion.u,
        u2,
        [...ops, [unit1.conversion.op, unit1.conversion.n]],
        initialValue
      ) as CalculateConversion<U1, U2>;

    case "ComposedUnit":
      switch (u2.type) {
        case "Unit":
          throw new ConversionError(unit1, u2);

        case "ConversionUnit":
          throw new ConversionError(unit1, u2);

        case "ComposedUnit": {
          // Use new dimension algebra for compatibility check
          if (!dimensionsCompatible(unit1, u2)) {
            throw new ConversionError(unit1, u2);
          }

          const composed1 = unit1 as AnyComposedUnit;
          const composed2 = u2 as AnyComposedUnit;
          const dim = composed1.dimension;
          const composedOp = getComposedOperation(dim);
          const exponent = getComposedExponent(dim);

          // For power operations (^), raise the single unit conversion to that power
          if (composedOp === "^" && exponent !== 1) {
            const unitConversion = convert(
              composed1.composedUnits[0]!,
              composed2.composedUnits[0]!,
              ops,
              initialValue
            );
            return unitConversion.pow(exponent, MATH_CTX) as CalculateConversion<U1, U2>;
          }

          // For multiplication/division compositions
          return composed1.composedUnits
            .map((compUnit: AnyUnit, index: number) => {
              return convert(compUnit, composed2.composedUnits[index]!, ops, initialValue);
            })
            .reduce((acc: BigDecimal | null, item: BigDecimal, index: number) => {
              if (acc === null) return item;

              // Determine operation based on exponent sign
              const keys = Object.keys(dim.exponents).sort();
              const key = keys[index];
              const exp = key ? dim.exponents[key] : 1;
              
              if (exp !== undefined && exp < 0) {
                return acc.divideWithMathContext(item, MATH_CTX);
              }
              return acc.multiply(item);
            }, null) as CalculateConversion<U1, U2>;
        }
      }
      break;
  }

  throw new ConversionError(unit1, u2);
}
