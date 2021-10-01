import type { Decimal } from "decimal.js";

export type Number = number | Decimal;

// Ops
export type Operation = "+" | "-" | "*" | "/" | "^" | "√";

// Basic dimensions
export type Dimension<Name extends string> = {
  type: "Dimension";
  name: Name;
};

export function dimension<Name extends string>(name: Name): Dimension<Name> {
  return { type: "Dimension", name };
}

export type AnySimpleDimension = Dimension<string>;

// Composed dimensions (aka quantities)
export type Quantity<Name extends string, C extends AnyComposition> = {
  type: "Quantity";
  name: Name;
  composition: C;
};

export function quantity<Name extends string, C extends AnyComposition>(
  name: Name,
  composition: C
): Quantity<Name, C> {
  return { type: "Quantity", name, composition };
}

export type AnyQuantity = Quantity<string, AnyComposition>;
export type AnyDimension = AnySimpleDimension | AnyQuantity;

export type Composition<
  D1 extends AnyDimension,
  Op extends Operation,
  D2 extends AnyDimension | Number
> = { d1: D1; op: Op; d2: D2 };

export type AnyComposition = {
  // Does not refer to Composition cause TS complains of circularity
  d1: AnyDimension;
  op: Operation;
  d2: AnyDimension | Number;
};

// Simple units
export type Unit<Name extends string, D extends AnySimpleDimension> = {
  name: Name;
  type: "Unit";
  dimension: D;
};

export function unit<Name extends string, D extends AnySimpleDimension>(
  name: Name,
  dimension: D
): Unit<Name, D> {
  return {
    name,
    type: "Unit",
    dimension,
  };
}

export type AnySimpleUnit = Unit<string, AnySimpleDimension>;

// Composed units

export type ComposedUnit<
  Name extends string,
  CD extends AnyQuantity,
  US extends AnyUnit[]
> = {
  type: "ComposedUnit";
  name: Name;
  dimension: CD;
  composedUnits: US;
};

export function composedUnit<
  Name extends string,
  CD extends AnyQuantity,
  US extends AnyUnit[]
>(name: Name, dimension: CD, composedUnits: US): ComposedUnit<Name, CD, US> {
  return { type: "ComposedUnit", name, dimension, composedUnits };
}

export type AnyComposedUnit = ComposedUnit<string, AnyQuantity, any>;

// Conversion units

export type AnyUnit = AnySimpleUnit | AnyComposedUnit | AnyConversionUnit;

export type Conversion<
  U extends AnyUnit,
  Op extends Operation,
  N extends Number
> = { u: U; op: Op; n: N };

export type AnyConversion = {
  u: AnyUnit;
  op: Operation;
  n: Number;
};

export type ConversionUnit<Name extends string, C extends AnyConversion> = {
  type: "ConversionUnit";
  name: Name;
  conversion: C;
  dimension: null;
};

export type AnyConversionUnit = ConversionUnit<string, AnyConversion>;

export function conversionUnit<Name extends string, C extends AnyConversion>(
  name: Name,
  conversion: C
): ConversionUnit<Name, C> {
  return { type: "ConversionUnit", name, conversion, dimension: null };
}

// Measurement
export type Measurement<N extends Number, U extends AnyUnit> = {
  type: "Measurement";
  n: N;
  u: AnyUnit;
};

export function measurement<N extends Number, U extends AnyUnit>(
  n: N,
  u: U
): Measurement<N, U> {
  return { type: "Measurement", n, u };
}

export type AnyMeasurement = Measurement<Number, AnyUnit>;
