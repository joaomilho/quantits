import { Unit, unit } from "./unit";
import { information, Information } from "../dimensions/digital";
import {
  Equal,
  equal,
  Kilo,
  kilo,
  Mega,
  mega,
  Giga,
  giga,
  Tera,
  tera,
  Peta,
  peta,
  Exa,
  exa,
  Zetta,
  zetta,
  Yotta,
  yotta,
  ConversionUnit,
  conversionUnit,
  Kibi,
  kibi,
  Mebi,
  mebi,
  Gibi,
  gibi,
  Tebi,
  tebi,
  Exbi,
  exbi,
  Pebi,
  pebi,
  Zebi,
  zebi,
  Yobi,
  yobi,
} from "./conversionUnit";

// Basic units
export type Bit = Unit<"Bit", Information>;
export const bit: Bit = unit("Bit", information);
export const bits = bit;
export const b = bit;

export type Trit = Unit<"Trit", Information>;
export const trit: Trit = unit("Trit", information);
export const trits = trit;

export type DigitalUnit = Bit | Trit;

// Derived units
export type Byte = ConversionUnit<"Byte", Equal<8, Bit>>;
const byte: Byte = conversionUnit("Byte", equal(8, bit));

export type Kilobyte = Kilo<Byte>;
export const kilobyte: Kilobyte = kilo(byte);
export type Megabyte = Mega<Byte>;
export const megabyte: Megabyte = mega(byte);
export type Gigabyte = Giga<Byte>;
export const gigabyte: Gigabyte = giga(byte);
export type Terabyte = Tera<Byte>;
export const terabyte: Terabyte = tera(byte);
export type Petabyte = Peta<Byte>;
export const petabyte: Petabyte = peta(byte);
export type Exabyte = Exa<Byte>;
export const exabyte: Exabyte = exa(byte);
export type Zettabyte = Zetta<Byte>;
export const zettabyte: Zettabyte = zetta(byte);
export type Yottabyte = Yotta<Byte>;
export const yottabyte: Yottabyte = yotta(byte);

export type Kibibyte = Kibi<Byte>;
export const kibibyte: Kibibyte = kibi(byte);
export type Mebibyte = Mebi<Byte>;
export const mebibyte: Mebibyte = mebi(byte);
export type Gibibyte = Gibi<Byte>;
export const gibibyte: Gibibyte = gibi(byte);
export type Tebibyte = Tebi<Byte>;
export const tebibyte: Tebibyte = tebi(byte);
export type Pebibyte = Pebi<Byte>;
export const petbibyte: Pebibyte = pebi(byte);
export type Exbibyte = Exbi<Byte>;
export const exbibyte: Exbibyte = exbi(byte);
export type Zebibyte = Zebi<Byte>;
export const zebibyte: Zebibyte = zebi(byte);
export type Yobibyte = Yobi<Byte>;
export const yobibyte: Yobibyte = yobi(byte);

export type Tryte = ConversionUnit<"Tryte", Equal<6, Trit>>;
const tryte: Tryte = conversionUnit("Tryte", equal(6, trit));

export type Kilotryte = Kilo<Tryte>;
export const kilotryte: Kilotryte = kilo(tryte);
export type Megatryte = Mega<Tryte>;
export const megatryte: Megatryte = mega(tryte);
export type Gigatryte = Giga<Tryte>;
export const gigatryte: Gigatryte = giga(tryte);
export type Teratryte = Tera<Tryte>;
export const teratryte: Teratryte = tera(tryte);
export type Petatryte = Peta<Tryte>;
export const petatryte: Petatryte = peta(tryte);
export type Exatryte = Exa<Tryte>;
export const exatryte: Exatryte = exa(tryte);
export type Zettatryte = Zetta<Tryte>;
export const zettatryte: Zettatryte = zetta(tryte);
export type Yottatryte = Yotta<Tryte>;
export const yottatryte: Yottatryte = yotta(tryte);

export type Kibitryte = Kibi<Tryte>;
export const kibitryte: Kibitryte = kibi(tryte);
export type Mebitryte = Mebi<Tryte>;
export const mebitryte: Mebitryte = mebi(tryte);
export type Gibitryte = Gibi<Tryte>;
export const gibitryte: Gibitryte = gibi(tryte);
export type Tebitryte = Tebi<Tryte>;
export const tebitryte: Tebitryte = tebi(tryte);
export type Pebitryte = Pebi<Tryte>;
export const petbitryte: Pebitryte = pebi(tryte);
export type Exbitryte = Exbi<Tryte>;
export const exbitryte: Exbitryte = exbi(tryte);
export type Zebitryte = Zebi<Tryte>;
export const zebitryte: Zebitryte = zebi(tryte);
export type Yobitryte = Yobi<Tryte>;
export const yobitryte: Yobitryte = yobi(tryte);
