// Ops
export type Operation = "*" | "/" | "^" | "√";

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
export type ComposedDimension<Name extends string, C extends AnyComposition> = {
  type: "ComposedDimension";
  name: Name;
  composition: C;
};

export type Quantity<
  Name extends string,
  C extends AnyComposition
> = ComposedDimension<Name, C>;

export function composedDimension<
  Name extends string,
  C extends AnyComposition
>(name: Name, composition: C): ComposedDimension<Name, C> {
  return { type: "ComposedDimension", name, composition };
}

export const quantity = composedDimension;

export type AnyComposedDimansion = ComposedDimension<string, AnyComposition>;
export type AnyDimension = AnySimpleDimension | AnyComposedDimansion;

export type Composition<
  D1 extends AnyDimension,
  Op extends Operation,
  D2 extends AnyDimension | number
> = { d1: D1; op: Op; d2: D2 };

export type AnyComposition = {
  // Does not refer to Composition cause TS complains of circularity
  d1: AnyDimension;
  op: Operation;
  d2: AnyDimension | number;
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
  CD extends AnyComposedDimansion,
  US extends AnyUnit[]
> = {
  type: "ComposedUnit";
  name: Name;
  dimension: CD;
  composedUnits: US;
};

export function composedUnit<
  Name extends string,
  CD extends AnyComposedDimansion,
  US extends AnyUnit[]
>(name: Name, dimension: CD, composedUnits: US): ComposedUnit<Name, CD, US> {
  return { type: "ComposedUnit", name, dimension, composedUnits };
}

export type AnyComposedUnit = ComposedUnit<string, AnyComposedDimansion, any>;

// Conversion units

import { AnyUnit } from "./units/anyUnit";

export type Conversion<
  U extends AnyUnit,
  Op extends Operation,
  N extends number
> = { u: U; op: Op; n: N };

export type AnyConversion = {
  u: AnyUnit;
  op: Operation;
  n: number;
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
