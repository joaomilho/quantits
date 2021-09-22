import { Operation } from "../operation";

export type Dimension<
  Name extends string,
  D extends AnyDerivation = undefined
> = {
  type: "Dimension";
  name: Name;
  derivation?: D;
};
export function dimension<Name extends string, D extends AnyDerivation>(
  name: Name,
  derivation?: D
): Dimension<Name, D> {
  return { type: "Dimension", name, derivation };
}

export type Any = Dimension<string, AnyDerivation>;

export type IsSimpleDimension<D extends Any> = D["derivation"] extends undefined
  ? true
  : false;

export type IsComplexDimension<D extends Any> =
  D["derivation"] extends undefined ? false : true;

export type Derivation<
  Q1 extends Any,
  Op extends Operation,
  Q2 extends Any | number
> = [Q1, Op, Q2];

export type AnyDerivation = [Any, Operation, Any | number];
