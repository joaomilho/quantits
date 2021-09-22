import { AnyComposedDimansion } from "../dimensions/composedDimension";
import { AnySimpleDimension } from "../dimensions/dimension";
import { Operation } from "../operation";
import { Unit } from "./unit";

export type ComposedUnit<
  Name extends string,
  CD extends AnyComposedDimansion
> = {
  type: "ComposedDimension";
  name: Name;
  dimension: CD;
};

export function composedUnit<
  Name extends string,
  CD extends AnyComposedDimansion
>(name: Name, dimension: CD): ComposedUnit<Name, CD> {
  return { type: "ComposedDimension", name, dimension };
}

export type AnyUnit =
  | Unit<string, AnySimpleDimension>
  | ComposedUnit<string, AnyComposedDimansion>;
