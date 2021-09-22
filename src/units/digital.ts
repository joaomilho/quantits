import { Unit, unit } from "./unit";
import { information, Information } from "../dimensions/digital";

// Basic units
export type Bit = Unit<"Bit", Information>;
export const bit: Bit = unit("Bit", information);
export const bits = bit;
export const b = bit;

export type Trit = Unit<"Trit", Information>;
export const trit: Trit = unit("Trit", information);
export const trits = trit;

export type DigitalUnit = Bit | Trit;
