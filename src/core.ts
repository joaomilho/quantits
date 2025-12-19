/**
 * Core types and functions for QuantiTS - a type-safe quantities library
 * @packageDocumentation
 */

/** Supported mathematical operations for unit conversions */
export type Operation = "+" | "-" | "*" | "/" | "^" | "√";

/**
 * A base dimension in a measurement system (e.g., Length, Time, Mass)
 * @typeParam Name - The unique name identifying this dimension
 */
export type Dimension<Name extends string> = {
  readonly type: "Dimension";
  readonly name: Name;
};

/** Creates a new base dimension */
export function dimension<Name extends string>(name: Name): Dimension<Name> {
  return { type: "Dimension", name };
}

/** Any simple (non-composed) dimension */
export type AnySimpleDimension = Dimension<string>;

/**
 * A composed dimension (quantity) derived from other dimensions
 * @typeParam Name - The unique name for this quantity
 * @typeParam C - The composition defining how this quantity relates to base dimensions
 */
export type Quantity<Name extends string, C extends AnyComposition> = {
  readonly type: "Quantity";
  readonly name: Name;
  readonly composition: C;
};

/** Creates a new composed quantity */
export function quantity<Name extends string, C extends AnyComposition>(
  name: Name,
  composition: C
): Quantity<Name, C> {
  return { type: "Quantity", name, composition };
}

/** Any quantity (composed dimension) */
export type AnyQuantity = Quantity<string, AnyComposition>;

/** Any dimension (simple or composed) */
export type AnyDimension = AnySimpleDimension | AnyQuantity;

/** Composition of dimensions via an operation */
export type Composition<
  D1 extends AnyDimension,
  Op extends Operation,
  D2 extends AnyDimension | number,
> = { readonly d1: D1; readonly op: Op; readonly d2: D2 };

/** Any composition structure */
export type AnyComposition = {
  readonly d1: AnyDimension;
  readonly op: Operation;
  readonly d2: AnyDimension | number;
};

/**
 * A base unit for measuring a simple dimension
 * @typeParam Name - The unique name for this unit
 * @typeParam D - The dimension this unit measures
 */
export type Unit<Name extends string, D extends AnySimpleDimension> = {
  readonly name: Name;
  readonly type: "Unit";
  readonly dimension: D;
};

/** Creates a new base unit for a dimension */
export function unit<Name extends string, D extends AnySimpleDimension>(
  name: Name,
  dimension: D
): Unit<Name, D> {
  return { name, type: "Unit", dimension };
}

/** Any simple unit */
export type AnySimpleUnit = Unit<string, AnySimpleDimension>;

/**
 * A composed unit for measuring a quantity
 * @typeParam Name - The unique name for this unit
 * @typeParam CD - The quantity this unit measures
 * @typeParam US - The component units that make up this composed unit
 */
export type ComposedUnit<Name extends string, CD extends AnyQuantity, US extends AnyUnit[]> = {
  readonly type: "ComposedUnit";
  readonly name: Name;
  readonly dimension: CD;
  readonly composedUnits: US;
};

/** Creates a new composed unit */
export function composedUnit<Name extends string, CD extends AnyQuantity, US extends AnyUnit[]>(
  name: Name,
  dimension: CD,
  composedUnits: US
): ComposedUnit<Name, CD, US> {
  return { type: "ComposedUnit", name, dimension, composedUnits };
}

/** Any composed unit */
export type AnyComposedUnit = ComposedUnit<string, AnyQuantity, AnyUnit[]>;

/** Any unit (simple, composed, or conversion) */
export type AnyUnit = AnySimpleUnit | AnyComposedUnit | AnyConversionUnit;

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
