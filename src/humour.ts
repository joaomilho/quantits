import { conversionUnit } from ".";
import { ConversionUnit } from "./core";
import { equal, Equal } from "./units/helpers";
import { picosecond, Picosecond } from "./units/physics";

// Be back in a jiffy
export type Jiffy = ConversionUnit<"Jiffy", Equal<33.3564, Picosecond>>;
export const jiffy: Jiffy = conversionUnit("Jiffy", equal(33.3564, picosecond));
