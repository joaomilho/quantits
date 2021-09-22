import { AnySimpleDimension } from "../dimensions/dimension";

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
