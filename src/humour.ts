import { conversionUnit } from ".";
import { ConversionUnit, Dimension, dimension, Unit, unit } from "./core";
import { equal, Equal } from "./units/helpers";
import { minute, Minute, picosecond, Picosecond } from "./units/physics";

// Be back in a jiffy
export type Jiffy = ConversionUnit<"Jiffy", Equal<33.3564, Picosecond>>;
export const jiffy: Jiffy = conversionUnit("Jiffy", equal(33.3564, picosecond));

// Just "a minute"
export type AMinute = ConversionUnit<"AMinute", Equal<5, Minute>>;
export const aminute: AMinute = conversionUnit("AMinute", equal(5, minute));

// Fame
export type Fame = Dimension<"Fame">;
export const fame: Fame = dimension("Fame");

export type Warhol = Unit<"Warhol", Fame>;
export const warhol: Warhol = unit("Warhol", fame);
