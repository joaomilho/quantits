/**
 * Core types and functions for QuantiTS - a type-safe quantities library
 * @packageDocumentation
 */

import type { Exponents, Dimension as DimensionBase } from "./dimension-algebra.js";
import { baseDimension as createBaseDimension, dimensionsEqual } from "./dimension-algebra.js";

// Re-export dimension algebra types (but Dimension is re-defined below for backwards compat)
export type { Exponents } from "./dimension-algebra.js";
export {
  baseDimension,
  dimensionless,
  isDimensionless,
  mul,
  div,
  power,
  invert,
  dimensionsEqual,
  dimensionToString,
  composeDimension,
} from "./dimension-algebra.js";

/** Supported mathematical operations for unit conversions */
export type Operation = "+" | "-" | "*" | "/" | "^" | "√";

// =============================================================================
// DIMENSIONS - Normalized exponent maps with backwards compatibility
// =============================================================================

/**
 * Dimension type with backwards compatibility.
 * - Dimension<"Length"> → base dimension with exponent 1 (legacy)
 * - Dimension<{Length: 2}> → dimension with explicit exponents (new)
 */
export type Dimension<T extends string | Exponents = Exponents> = 
  T extends string 
    ? DimensionBase<{ readonly [K in T]: 1 }>
    : DimensionBase<T & Exponents>;

/** Any dimension */
export type AnyDimension = DimensionBase<Exponents>;

/** Creates a new base dimension with exponent 1 */
export function dimension<Name extends string>(
  name: Name
): Dimension<Name> {
  return createBaseDimension(name) as Dimension<Name>;
}

// =============================================================================
// LEGACY COMPATIBILITY - Quantity type (now just an alias for Dimension)
// =============================================================================

/**
 * A composed dimension (quantity) - now just a Dimension with exponents
 * The second type parameter D can be either raw Exponents or a Dimension type
 * @deprecated Use Dimension directly with mul/div/power operations
 */
export type Quantity<_Name extends string, D extends Exponents | Dimension<Exponents>> = 
  D extends Dimension<infer E> ? Dimension<E> : Dimension<D & Exponents>;

/** @deprecated Use mul/div/power from dimension-algebra instead */
export type AnyQuantity = Dimension<Exponents>;

/** @deprecated Compositions are now represented as exponent maps */
export type Composition<
  _D1 extends AnyDimension,
  _Op extends Operation,
  _D2 extends AnyDimension | number,
> = Exponents;

/** @deprecated */
export type AnyComposition = Exponents;

/**
 * Legacy quantity function - wraps dimension operations
 * @deprecated Use div/mul/power directly, they already return Dimension
 */
export function quantity<Name extends string, D extends Dimension<Exponents>>(
  _name: Name,
  dimension: D
): D {
  // The name is ignored now - dimensions are identified by their exponents
  return dimension;
}

// =============================================================================
// UNITS
// =============================================================================

/**
 * A base unit for measuring a dimension
 * @typeParam Name - The unique name for this unit
 * @typeParam D - The dimension this unit measures
 */
export type Unit<Name extends string, D extends AnyDimension> = {
  readonly name: Name;
  readonly type: "Unit";
  readonly dimension: D;
};

/** Creates a new base unit for a dimension */
export function unit<Name extends string, D extends AnyDimension>(
  name: Name,
  dimension: D
): Unit<Name, D> {
  return { name, type: "Unit", dimension };
}

/** Any simple unit */
export type AnySimpleUnit = Unit<string, AnyDimension>;

/**
 * A composed unit for measuring a quantity
 * @typeParam Name - The unique name for this unit
 * @typeParam D - The dimension this unit measures
 * @typeParam US - The component units that make up this composed unit
 */
export type ComposedUnit<Name extends string, D extends AnyDimension, US extends AnyUnit[]> = {
  readonly type: "ComposedUnit";
  readonly name: Name;
  readonly dimension: D;
  readonly composedUnits: US;
};

/** Creates a new composed unit */
export function composedUnit<Name extends string, D extends AnyDimension, US extends AnyUnit[]>(
  name: Name,
  dimension: D,
  composedUnits: US
): ComposedUnit<Name, D, US> {
  return { type: "ComposedUnit", name, dimension, composedUnits };
}

/** Any composed unit */
export type AnyComposedUnit = ComposedUnit<string, AnyDimension, AnyUnit[]>;

/** Any unit (simple, composed, or conversion) */
export type AnyUnit = AnySimpleUnit | AnyComposedUnit | AnyConversionUnit;

// =============================================================================
// CONVERSIONS
// =============================================================================

/** Conversion specification between units */
export type Conversion<U extends AnyUnit, Op extends Operation, N extends number> = {
  readonly u: U;
  readonly op: Op;
  readonly n: N;
};

/** Any conversion structure */
export type AnyConversion = {
  readonly u: AnyUnit;
  readonly op: Operation;
  readonly n: number;
};

/**
 * A unit defined by conversion from another unit
 * @typeParam Name - The unique name for this unit
 * @typeParam C - The conversion specification
 */
export type ConversionUnit<Name extends string, C extends AnyConversion> = {
  readonly type: "ConversionUnit";
  readonly name: Name;
  readonly conversion: C;
  readonly dimension: null;
};

/** Any conversion unit */
export type AnyConversionUnit = ConversionUnit<string, AnyConversion>;

/** Creates a new conversion unit */
export function conversionUnit<Name extends string, C extends AnyConversion>(
  name: Name,
  conversion: C
): ConversionUnit<Name, C> {
  return { type: "ConversionUnit", name, conversion, dimension: null };
}

// =============================================================================
// MEASUREMENTS
// =============================================================================

/**
 * A measurement combining a numeric value with a unit
 * @typeParam N - The numeric type of the measurement
 * @typeParam U - The unit of the measurement
 */
export type Measurement<N extends number, U extends AnyUnit> = {
  readonly type: "Measurement";
  readonly n: N;
  readonly u: U;
};

/** Creates a new measurement */
export function measurement<N extends number, U extends AnyUnit>(n: N, u: U): Measurement<N, U> {
  return { type: "Measurement", n, u };
}

/** Any measurement */
export type AnyMeasurement = Measurement<number, AnyUnit>;

// =============================================================================
// DIMENSION EXTRACTION UTILITIES
// =============================================================================

/** Extract the dimension from any unit */
export type DimensionOf<U extends AnyUnit> = U extends Unit<string, infer D>
  ? D
  : U extends ComposedUnit<string, infer D, AnyUnit[]>
    ? D
    : U extends ConversionUnit<string, infer C>
      ? DimensionOf<C["u"]>
      : never;

/** Get the dimension of a unit at runtime */
export function getDimension(u: AnyUnit): AnyDimension {
  switch (u.type) {
    case "Unit":
      return u.dimension;
    case "ComposedUnit":
      return u.dimension;
    case "ConversionUnit":
      return getDimension(u.conversion.u);
  }
}

/** Check if two units have compatible dimensions */
export function dimensionsCompatible(u1: AnyUnit, u2: AnyUnit): boolean {
  return dimensionsEqual(getDimension(u1), getDimension(u2));
}
