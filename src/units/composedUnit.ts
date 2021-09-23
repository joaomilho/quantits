import { AnyComposedDimansion } from "../dimensions/composedDimension";
import { AnySimpleDimension, Dimension } from "../dimensions/dimension";
import { AnySimpleUnit, Unit } from "./unit";

export type ComposedUnit<
  Name extends string,
  CD extends AnyComposedDimansion,
  DCU extends DeriveComposedUnits<CD>
> = {
  type: "ComposedUnit";
  name: Name;
  dimension: CD;
  composedUnits: DCU;
};

type UnitOf<SD extends AnySimpleDimension> = Unit<any, SD>;

type DeriveComposedUnits<CD extends AnyComposedDimansion> =
  CD["composition"]["d1"] extends AnySimpleDimension
    ? CD["composition"]["d2"] extends AnySimpleDimension
      ? [UnitOf<CD["composition"]["d1"]>, UnitOf<CD["composition"]["d2"]>]
      : [UnitOf<CD["composition"]["d1"]>]
    : 1;

export function composedUnit<
  Name extends string,
  CD extends AnyComposedDimansion
>(
  name: Name,
  dimension: CD,
  composedUnits: DeriveComposedUnits<CD>
): ComposedUnit<Name, CD, DeriveComposedUnits<CD>> {
  return { type: "ComposedUnit", name, dimension, composedUnits };
}

export type AnyComposedUnit = ComposedUnit<string, AnyComposedDimansion, any>;
