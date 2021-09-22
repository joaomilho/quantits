import { Any as AnyDimension, Derivation } from "./dimension";

export type Multiply<
  Q1 extends AnyDimension,
  Q2 extends AnyDimension
> = Derivation<Q1, "*", Q2>;

export function multiply<Q1 extends AnyDimension, Q2 extends AnyDimension>(
  q1: Q1,
  q2: Q2
): Multiply<Q1, Q2> {
  return [q1, "*", q2];
}

export type Divide<
  Q1 extends AnyDimension,
  Q2 extends AnyDimension
> = Derivation<Q1, "/", Q2>;

export function divide<Q1 extends AnyDimension, Q2 extends AnyDimension>(
  q1: Q1,
  q2: Q2
): Divide<Q1, Q2> {
  return [q1, "/", q2];
}

export type Power<Q1 extends AnyDimension, Exp extends number> = Derivation<
  Q1,
  "^",
  Exp
>;

export function power<Q1 extends AnyDimension, Exp extends number>(
  q1: Q1,
  exp: Exp
): Power<Q1, Exp> {
  return [q1, "^", exp];
}
