import { AnyComposedDimansion } from "../dimensions/composedDimension";
import { AnySimpleDimension, Dimension } from "../dimensions/dimension";
import { Area, Speed } from "../dimensions/physics";
import { AnyUnit } from "./anyUnit";
import {
  AnyConversionUnit,
  Conversion,
  ConversionUnit,
} from "./conversionUnit";
import { AnySimpleUnit, Unit } from "./unit";

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
