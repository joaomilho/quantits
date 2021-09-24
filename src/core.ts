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
