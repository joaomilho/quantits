import { Unit } from "..";
import {
  AnyConversion,
  AnyUnit,
  Conversion,
  ConversionUnit,
  conversionUnit,
  Operation,
  Number,
} from "../core";

export type Sum<U extends AnyUnit, N extends Number> = Conversion<U, "+", N>;

export function sum<U extends AnyUnit, N extends Number>(
  u: U,
  n: N
): Sum<U, N> {
  return { u, op: "+", n };
}

export type Subtract<U extends AnyUnit, N extends Number> = Conversion<
  U,
  "-",
  N
>;

export function subtract<U extends AnyUnit, N extends Number>(
  u: U,
  n: N
): Subtract<U, N> {
  return { u, op: "-", n };
}

export type Equal<N extends Number, U extends AnyUnit> = Conversion<U, "*", N>;

export function equal<N extends Number, U extends AnyUnit>(
  n: N,
  u: U
): Equal<N, U> {
  return { u, op: "*", n };
}

// export type Equal<N extends number, U extends AnyUnit> = Multiply<U, N>;
// export function equal<U extends AnyUnit, N extends number>(
//   n: N,
//   u: U
// ): Equal<N, U> {
//   return { u, op: "*", n };
// }

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

export type Sixty<U extends AnyUnit, Name extends string> = ConversionUnit<
  Name,
  Equal<60, U>
>;
export function sixty<U extends AnyUnit, Name extends string>(
  u: U,
  name: Name
): Sixty<U, Name> {
  return conversionUnit(name, equal(60, u));
}

// Multiple convs in one
type Calc = [Operation, Number];

export type Conv2<
  Name extends string,
  U extends AnyUnit,
  Calc1 extends Calc,
  Calc2 extends Calc
> = ConversionUnit<
  Name,
  Conversion<
    ConversionUnit<"_internal1", Conversion<U, Calc2[0], Calc2[1]>>,
    Calc1[0],
    Calc1[1]
  >
>;

export function conv2<
  Name extends string,
  U extends AnyUnit,
  Calc1 extends Calc,
  Calc2 extends Calc
>(name: Name, u: U, calc1: Calc1, calc2: Calc2): Conv2<Name, U, Calc1, Calc2> {
  return conversionUnit(name, {
    u: conversionUnit("_internal1", { u, op: calc2[0], n: calc2[1] }),
    op: calc1[0],
    n: calc1[1],
  });
}

export type Conv3<
  Name extends string,
  U extends AnyUnit,
  Calc1 extends Calc,
  Calc2 extends Calc,
  Calc3 extends Calc
> = ConversionUnit<
  Name,
  Conversion<
    ConversionUnit<
      "_internal1",
      Conversion<
        ConversionUnit<"_internal2", Conversion<U, Calc3[0], Calc3[1]>>,
        Calc2[0],
        Calc2[1]
      >
    >,
    Calc1[0],
    Calc1[1]
  >
>;

export function conv3<
  Name extends string,
  U extends AnyUnit,
  Calc1 extends Calc,
  Calc2 extends Calc,
  Calc3 extends Calc
>(
  name: Name,
  u: U,
  calc1: Calc1,
  calc2: Calc2,
  calc3: Calc3
): Conv3<Name, U, Calc1, Calc2, Calc3> {
  return conversionUnit(name, {
    u: conversionUnit("_internal1", {
      u: conversionUnit("_internal2", { u, op: calc3[0], n: calc3[1] }),
      op: calc2[0],
      n: calc2[1],
    }),
    op: calc1[0],
    n: calc1[1],
  });
}

export type Conv4<
  Name extends string,
  U extends AnyUnit,
  Calc1 extends Calc,
  Calc2 extends Calc,
  Calc3 extends Calc,
  Calc4 extends Calc
> = ConversionUnit<
  Name,
  Conversion<
    ConversionUnit<
      "_internal1",
      Conversion<
        ConversionUnit<
          "_internal2",
          Conversion<
            ConversionUnit<"_internal3", Conversion<U, Calc4[0], Calc4[1]>>,
            Calc3[0],
            Calc3[1]
          >
        >,
        Calc2[0],
        Calc2[1]
      >
    >,
    Calc1[0],
    Calc1[1]
  >
>;

export function conv4<
  Name extends string,
  U extends AnyUnit,
  Calc1 extends Calc,
  Calc2 extends Calc,
  Calc3 extends Calc,
  Calc4 extends Calc
>(
  name: Name,
  u: U,
  calc1: Calc1,
  calc2: Calc2,
  calc3: Calc3,
  calc4: Calc4
): Conv4<Name, U, Calc1, Calc2, Calc3, Calc4> {
  return conversionUnit(name, {
    u: conversionUnit("_internal1", {
      u: conversionUnit("_internal2", {
        u: conversionUnit("_internal3", { u, op: calc4[0], n: calc4[1] }),
        op: calc3[0],
        n: calc3[1],
      }),
      op: calc2[0],
      n: calc2[1],
    }),
    op: calc1[0],
    n: calc1[1],
  });
}
