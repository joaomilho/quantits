// import { Any as AnyDimension } from "../dimensions/dimension";
// import { BasicUnit as PhysicsBasicUnit } from "./physics/basic/basic";
// import { BasicUnit as DigitalBasicUnit } from "./digital";
// import {
//   Derivation,
//   SimpleUnit as Unit,
//   AnyUnit,
//   simpleUnit as unit,
// } from "./unit";

import { Operation } from "../operation";
import { AnyUnit } from "./anyUnit";

export type Conversion<
  U extends AnyUnit,
  Op extends Operation,
  N extends number
> = { u: U; op: Op; n: N };

export type AnyConversion = {
  u: AnyUnit;
  op: Operation;
  n: number;
};

export type ConversionUnit<Name extends string, C extends AnyConversion> = {
  type: "ConversionUnit";
  name: Name;
  conversion: C;
  dimension: null;
};

export type AnyConversionUnit = ConversionUnit<string, AnyConversion>;

export function conversionUnit<Name extends string, C extends AnyConversion>(
  name: Name,
  conversion: C
): ConversionUnit<Name, C> {
  return { type: "ConversionUnit", name, conversion, dimension: null };
}

export type Multiply<U extends AnyUnit, N extends number> = Conversion<
  U,
  "*",
  N
>;

export function multiply<U extends AnyUnit, N extends number>(
  u: U,
  n: N
): Multiply<U, N> {
  return { u, op: "*", n };
}

export type Equal<N extends number, U extends AnyUnit> = Multiply<U, N>;
export function equal<U extends AnyUnit, N extends number>(
  n: N,
  u: U
): Equal<N, U> {
  return { u, op: "*", n };
}

type BasicConv<
  U extends AnyUnit,
  Prefix extends string,
  N extends number
> = ConversionUnit<`${Prefix}${Lowercase<U["name"]>}`, Equal<N, U>>;

export function basicConv<
  U extends AnyUnit,
  Prefix extends string,
  N extends number
>(u: U, prefix: Prefix, n: N): BasicConv<U, Prefix, N> {
  return conversionUnit(
    `${prefix}${u.name.toLowerCase()}` as `${Prefix}${Lowercase<U["name"]>}`,
    equal(n, u)
  );
}

export type Kilo<U extends AnyUnit> = BasicConv<U, "Kilo", 1000>;
export function kilo<U extends AnyUnit>(u: U): Kilo<U> {
  return basicConv(u, "Kilo", 1000);
}

export type Mega<U extends AnyUnit> = BasicConv<U, "Mega", 1000000>;
export function mega<U extends AnyUnit>(u: U): Mega<U> {
  return basicConv(u, "Mega", 1000000);
}

export type Giga<U extends AnyUnit> = BasicConv<U, "Giga", 1000000000>;
export function giga<U extends AnyUnit>(u: U): Giga<U> {
  return basicConv(u, "Giga", 1000000000);
}

export type Tera<U extends AnyUnit> = BasicConv<U, "Tera", 1000000000000>;
export function tera<U extends AnyUnit>(u: U): Tera<U> {
  return basicConv(u, "Tera", 1000000000000);
}

export type Peta<U extends AnyUnit> = BasicConv<U, "Peta", 1000000000000000>;
export function peta<U extends AnyUnit>(u: U): Peta<U> {
  return basicConv(u, "Peta", 1000000000000000);
}

export type Exa<U extends AnyUnit> = BasicConv<U, "Exa", 1000000000000000000>;
export function exa<U extends AnyUnit>(u: U): Exa<U> {
  return basicConv(u, "Exa", 1000000000000000000);
}

export type Zetta<U extends AnyUnit> = BasicConv<
  U,
  "Zetta",
  1000000000000000000000
>;
export function zetta<U extends AnyUnit>(u: U): Zetta<U> {
  return basicConv(u, "Zetta", 1000000000000000000000);
}

export type Yotta<U extends AnyUnit> = BasicConv<
  U,
  "Yotta",
  1000000000000000000000000
>;
export function yotta<U extends AnyUnit>(u: U): Yotta<U> {
  return basicConv(u, "Yotta", 1000000000000000000000000);
}

export type Deci<U extends AnyUnit> = BasicConv<U, "Deci", 0.1>;
export function deci<U extends AnyUnit>(u: U): Deci<U> {
  return basicConv(u, "Deci", 0.1);
}

export type Centi<U extends AnyUnit> = BasicConv<U, "Centi", 0.01>;
export function centi<U extends AnyUnit>(u: U): Centi<U> {
  return basicConv(u, "Centi", 0.01);
}

export type Mili<U extends AnyUnit> = BasicConv<U, "Mili", 0.001>;
export function mili<U extends AnyUnit>(u: U): Mili<U> {
  return basicConv(u, "Mili", 0.001);
}

export type Micro<U extends AnyUnit> = BasicConv<U, "Micro", 0.000001>;
export function micro<U extends AnyUnit>(u: U): Micro<U> {
  return basicConv(u, "Micro", 0.000001);
}

export type Nano<U extends AnyUnit> = BasicConv<U, "Nano", 0.000000001>;
export function nano<U extends AnyUnit>(u: U): Nano<U> {
  return basicConv(u, "Nano", 0.000000001);
}

export type Pico<U extends AnyUnit> = BasicConv<U, "Pico", 0.000000000001>;
export function pico<U extends AnyUnit>(u: U): Pico<U> {
  return basicConv(u, "Pico", 0.000000000001);
}

export type Femto<U extends AnyUnit> = BasicConv<U, "Femto", 0.000000000000001>;
export function femto<U extends AnyUnit>(u: U): Femto<U> {
  return basicConv(u, "Femto", 0.000000000000001);
}

export type Sixty<U extends AnyUnit, Name extends string> = BasicConv<
  U,
  Name,
  60
>;
export function sixty<U extends AnyUnit, Name extends string>(
  u: U,
  name: Name
): Sixty<U, Name> {
  return basicConv(u, name, 60);
}
