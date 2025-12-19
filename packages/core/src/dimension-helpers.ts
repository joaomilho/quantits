/**
 * Legacy dimension helper functions
 * @deprecated Use mul, div, power from dimension-algebra.js directly
 */

import type { Dimension, Exponents } from "./dimension-algebra.js";
import {
  mul as algebraMul,
  div as algebraDiv,
  power as algebraPower,
  type MulExponents,
  type DivExponents,
  type PowExponents,
} from "./dimension-algebra.js";

/** 
 * Multiply two dimensions
 * @deprecated Use mul from dimension-algebra.js
 */
export type Multiply<D1 extends Dimension<Exponents>, D2 extends Dimension<Exponents>> = 
  Dimension<MulExponents<D1["exponents"], D2["exponents"]>>;

export function multiply<D1 extends Dimension<Exponents>, D2 extends Dimension<Exponents>>(
  d1: D1,
  d2: D2
): Multiply<D1, D2> {
  return algebraMul(d1, d2) as Multiply<D1, D2>;
}

/** 
 * Divide two dimensions
 * @deprecated Use div from dimension-algebra.js
 */
export type Divide<D1 extends Dimension<Exponents>, D2 extends Dimension<Exponents>> = 
  Dimension<DivExponents<D1["exponents"], D2["exponents"]>>;

export function divide<D1 extends Dimension<Exponents>, D2 extends Dimension<Exponents>>(
  d1: D1,
  d2: D2
): Divide<D1, D2> {
  return algebraDiv(d1, d2) as Divide<D1, D2>;
}

/** 
 * Raise a dimension to a power
 * @deprecated Use power from dimension-algebra.js
 */
export type Pow<D1 extends Dimension<Exponents>, Exp extends number> = 
  Dimension<PowExponents<D1["exponents"], Exp>>;

export function pow<D1 extends Dimension<Exponents>, Exp extends number>(
  d1: D1, 
  exp: Exp
): Pow<D1, Exp> {
  return algebraPower(d1, exp) as Pow<D1, Exp>;
}
