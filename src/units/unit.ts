import { AnyDimension } from "../dimensions/dimension";

export type Unit<Name extends string, D extends AnyDimension> = {
  name: Name;
  type: "Unit";
  dimension: D;
};

export function unit<Name extends string, D extends AnyDimension>(
  name: Name,
  dimension: D
): Unit<Name, D> {
  return {
    name,
    type: "Unit",
    dimension,
  };
}
