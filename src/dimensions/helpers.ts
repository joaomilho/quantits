import { AnyDimension, Composition } from "./composedDimension";

export type Multiply<
  Q1 extends AnyDimension,
  Q2 extends AnyDimension
> = Composition<Q1, "*", Q2>;

export function multiply<D1 extends AnyDimension, D2 extends AnyDimension>(
  d1: D1,
  d2: D2
): Multiply<D1, D2> {
  return { d1, op: "*", d2 };
}

export type Divide<
  Q1 extends AnyDimension,
  Q2 extends AnyDimension
> = Composition<Q1, "/", Q2>;

export function divide<D1 extends AnyDimension, D2 extends AnyDimension>(
  d1: D1,
  d2: D2
): Divide<D1, D2> {
  return { d1, op: "/", d2 };
}

export type Power<D1 extends AnyDimension, Exp extends number> = Composition<
  D1,
  "^",
  Exp
>;

export function power<D1 extends AnyDimension, Exp extends number>(
  d1: D1,
  exp: Exp
): Power<D1, Exp> {
  return { d1, op: "^", d2: exp };
}
