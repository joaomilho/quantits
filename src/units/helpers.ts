import type { AnyConversion, AnyUnit, Conversion, ConversionUnit, Operation } from "../core.js";
import { conversionUnit } from "../core.js";

/** Sum conversion: adds N to the unit value */
export type Sum<U extends AnyUnit, N extends number> = Conversion<U, "+", N>;

export function sum<U extends AnyUnit, N extends number>(u: U, n: N): Sum<U, N> {
  return { u, op: "+", n };
}

/** Subtract conversion: subtracts N from the unit value */
export type Subtract<U extends AnyUnit, N extends number> = Conversion<U, "-", N>;

export function subtract<U extends AnyUnit, N extends number>(u: U, n: N): Subtract<U, N> {
  return { u, op: "-", n };
}

/** Equal conversion: multiplies unit value by N */
export type Equal<N extends number, U extends AnyUnit> = Conversion<U, "*", N>;

export function equal<N extends number, U extends AnyUnit>(n: N, u: U): Equal<N, U> {
  return { u, op: "*", n };
}

type BasicConv<U extends AnyUnit, Prefix extends string, N extends number> = ConversionUnit<
  `${Prefix}${Lowercase<U["name"]>}`,
  Equal<N, U>
>;

export function basicConv<U extends AnyUnit, Prefix extends string, N extends number>(
  u: U,
  prefix: Prefix,
  n: N
): BasicConv<U, Prefix, N> {
  return conversionUnit(
    `${prefix}${u.name.toLowerCase()}` as `${Prefix}${Lowercase<U["name"]>}`,
    equal(n, u)
  );
}

// Binary prefixes (1024-based)

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

export type Zebi<U extends AnyUnit> = BasicConv<U, "Zebi", 1.1805916207174113e21>;
export function zebi<U extends AnyUnit>(u: U): Zebi<U> {
  return basicConv(u, "Zebi", 1.1805916207174113e21);
}

export type Yobi<U extends AnyUnit> = BasicConv<U, "Yobi", 1.2089258196146292e24>;
export function yobi<U extends AnyUnit>(u: U): Yobi<U> {
  return basicConv(u, "Yobi", 1.2089258196146292e24);
}

// Metric prefixes (1000-based)
// https://en.wikipedia.org/wiki/Metric_prefix

export type Kilo<U extends AnyUnit> = BasicConv<U, "Kilo", 1e3>;
export function kilo<U extends AnyUnit>(u: U): Kilo<U> {
  return basicConv(u, "Kilo", 1e3);
}

export type Mega<U extends AnyUnit> = BasicConv<U, "Mega", 1e6>;
export function mega<U extends AnyUnit>(u: U): Mega<U> {
  return basicConv(u, "Mega", 1e6);
}

export type Giga<U extends AnyUnit> = BasicConv<U, "Giga", 1e9>;
export function giga<U extends AnyUnit>(u: U): Giga<U> {
  return basicConv(u, "Giga", 1e9);
}

export type Tera<U extends AnyUnit> = BasicConv<U, "Tera", 1e12>;
export function tera<U extends AnyUnit>(u: U): Tera<U> {
  return basicConv(u, "Tera", 1e12);
}

export type Peta<U extends AnyUnit> = BasicConv<U, "Peta", 1e15>;
export function peta<U extends AnyUnit>(u: U): Peta<U> {
  return basicConv(u, "Peta", 1e15);
}

export type Exa<U extends AnyUnit> = BasicConv<U, "Exa", 1e18>;
export function exa<U extends AnyUnit>(u: U): Exa<U> {
  return basicConv(u, "Exa", 1e18);
}

export type Zetta<U extends AnyUnit> = BasicConv<U, "Zetta", 1e21>;
export function zetta<U extends AnyUnit>(u: U): Zetta<U> {
  return basicConv(u, "Zetta", 1e21);
}

export type Yotta<U extends AnyUnit> = BasicConv<U, "Yotta", 1e24>;
export function yotta<U extends AnyUnit>(u: U): Yotta<U> {
  return basicConv(u, "Yotta", 1e24);
}

export type Deci<U extends AnyUnit> = BasicConv<U, "Deci", 1e-1>;
export function deci<U extends AnyUnit>(u: U): Deci<U> {
  return basicConv(u, "Deci", 1e-1);
}

export type Centi<U extends AnyUnit> = BasicConv<U, "Centi", 1e-2>;
export function centi<U extends AnyUnit>(u: U): Centi<U> {
  return basicConv(u, "Centi", 1e-2);
}

export type Mili<U extends AnyUnit> = BasicConv<U, "Mili", 1e-3>;
export function mili<U extends AnyUnit>(u: U): Mili<U> {
  return basicConv(u, "Mili", 1e-3);
}

export type Micro<U extends AnyUnit> = BasicConv<U, "Micro", 1e-6>;
export function micro<U extends AnyUnit>(u: U): Micro<U> {
  return basicConv(u, "Micro", 1e-6);
}

export type Nano<U extends AnyUnit> = BasicConv<U, "Nano", 1e-9>;
export function nano<U extends AnyUnit>(u: U): Nano<U> {
  return basicConv(u, "Nano", 1e-9);
}

export type Pico<U extends AnyUnit> = BasicConv<U, "Pico", 1e-12>;
export function pico<U extends AnyUnit>(u: U): Pico<U> {
  return basicConv(u, "Pico", 1e-12);
}

export type Femto<U extends AnyUnit> = BasicConv<U, "Femto", 1e-15>;
export function femto<U extends AnyUnit>(u: U): Femto<U> {
  return basicConv(u, "Femto", 1e-15);
}

export type Atto<U extends AnyUnit> = BasicConv<U, "Atto", 1e-18>;
export function atto<U extends AnyUnit>(u: U): Atto<U> {
  return basicConv(u, "Atto", 1e-18);
}

export type Zepto<U extends AnyUnit> = BasicConv<U, "Zepto", 1e-21>;
export function zepto<U extends AnyUnit>(u: U): Zepto<U> {
  return basicConv(u, "Zepto", 1e-21);
}

export type Yocto<U extends AnyUnit> = BasicConv<U, "Yocto", 1e-24>;
export function yocto<U extends AnyUnit>(u: U): Yocto<U> {
  return basicConv(u, "Yocto", 1e-24);
}

/** Sixty: multiplies by 60 (for minutes, hours, etc.) */
export type Sixty<U extends AnyUnit, Name extends string> = ConversionUnit<Name, Equal<60, U>>;
export function sixty<U extends AnyUnit, Name extends string>(u: U, name: Name): Sixty<U, Name> {
  return conversionUnit(name, equal(60, u));
}

// Multiple conversions in one
/** A calculation step: [operation, number] */
export type Calc = readonly [Operation, number];

/** Determines the name for each nesting level */
type ConvName<Name extends string, Depth extends readonly any[]> =
  Depth["length"] extends 0 ? Name : `_internal${Depth["length"]}`;

/**
 * Unified conversion type - recursively builds nested ConversionUnit structure
 * @typeParam Name - The name of the resulting conversion unit
 * @typeParam U - The base unit to convert from
 * @typeParam Calcs - Tuple of calculation steps [operation, number]
 * @typeParam Depth - Internal counter for naming nested units (don't specify)
 */
export type Conv<
  Name extends string,
  U extends AnyUnit,
  Calcs extends readonly Calc[],
  Depth extends readonly any[] = [],
> = Calcs extends readonly [infer First extends Calc, ...infer Rest extends readonly Calc[]]
  ? Rest extends readonly []
    ? ConversionUnit<ConvName<Name, Depth>, Conversion<U, First[0], First[1]>>
    : ConversionUnit<
        ConvName<Name, Depth>,
        Conversion<Conv<Name, U, Rest, [...Depth, any]>, First[0], First[1]>
      >
  : never;

/**
 * Create a conversion unit with multiple chained operations
 * @param name - The name of the resulting conversion unit
 * @param u - The base unit to convert from
 * @param calcs - Calculation steps as [operation, number] tuples
 * @returns A nested ConversionUnit structure
 *
 * @example
 * // Fahrenheit to Kelvin: (F - 32) * 5 / 9 + 273.15
 * const fahrenheit = conv("Fahrenheit", kelvin,
 *   ["-", 32],
 *   ["*", 5],
 *   ["/", 9],
 *   ["+", 273.15]
 * );
 */
export function conv<
  Name extends string,
  U extends AnyUnit,
  Calcs extends readonly Calc[],
>(name: Name, u: U, ...calcs: Calcs): Conv<Name, U, Calcs> {
  // Build nested structure from inside out (reverse order)
  const reversed = [...calcs].reverse();

  let result: AnyUnit = u;
  for (let i = 0; i < reversed.length; i++) {
    const calc = reversed[i]!;
    const internalName =
      i === reversed.length - 1 ? name : `_internal${reversed.length - 1 - i}`;
    result = conversionUnit(internalName, { u: result, op: calc[0], n: calc[1] });
  }

  return result as Conv<Name, U, Calcs>;
}
