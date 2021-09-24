import {
  AnyConversion,
  AnyUnit,
  Conversion,
  ConversionUnit,
  conversionUnit,
  Operation,
} from "../core";

export type Sum<U extends AnyUnit, N extends number> = Conversion<U, "+", N>;

export function sum<U extends AnyUnit, N extends number>(
  u: U,
  n: N
): Sum<U, N> {
  return { u, op: "+", n };
}

export type Subtract<U extends AnyUnit, N extends number> = Conversion<
  U,
  "-",
  N
>;

export function subtract<U extends AnyUnit, N extends number>(
  u: U,
  n: N
): Subtract<U, N> {
  return { u, op: "-", n };
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

// * 1024s

export type Kibi<U extends AnyUnit> = BasicConv<U, "Kibi", 1024>;
export function kibi<U extends AnyUnit>(u: U): Kibi<U> {
  return basicConv(u, "Kibi", 1024);
}

export type Mebi<U extends AnyUnit> = BasicConv<U, "Mebi", 1048576>;
export function mebi<U extends AnyUnit>(u: U): Mebi<U> {
  return basicConv(u, "Mebi", 1048576);
}

export type Gibi<U extends AnyUnit> = BasicConv<U, "Gibi", 1073741824>;
export function gibi<U extends AnyUnit>(u: U): Gibi<U> {
  return basicConv(u, "Gibi", 1073741824);
}

export type Tebi<U extends AnyUnit> = BasicConv<U, "Tebi", 1099511627776>;
export function tebi<U extends AnyUnit>(u: U): Tebi<U> {
  return basicConv(u, "Tebi", 1099511627776);
}

export type Pebi<U extends AnyUnit> = BasicConv<U, "Pebi", 1125899906842624>;
export function pebi<U extends AnyUnit>(u: U): Pebi<U> {
  return basicConv(u, "Pebi", 1125899906842624);
}

export type Exbi<U extends AnyUnit> = BasicConv<U, "Exbi", 1152921504606847000>;
export function exbi<U extends AnyUnit>(u: U): Exbi<U> {
  return basicConv(u, "Exbi", 1152921504606847000);
}

export type Zebi<U extends AnyUnit> = BasicConv<
  U,
  "Zebi",
  1.1805916207174113e21
>;
export function zebi<U extends AnyUnit>(u: U): Zebi<U> {
  return basicConv(u, "Zebi", 1.1805916207174113e21);
}

export type Yobi<U extends AnyUnit> = BasicConv<
  U,
  "Yobi",
  1.2089258196146292e24
>;
export function yobi<U extends AnyUnit>(u: U): Yobi<U> {
  return basicConv(u, "Yobi", 1.2089258196146292e24);
}

// * 1000s

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
