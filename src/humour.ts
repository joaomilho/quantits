import type { ConversionUnit, Dimension, Unit } from "./core.js";
import { conversionUnit, dimension, unit } from "./core.js";
import type { Equal } from "./units/helpers.js";
import { equal } from "./units/helpers.js";
import type { Minute, Picosecond } from "./units/physics.js";
import { minute, picosecond } from "./units/physics.js";

/** Jiffy - the time it takes for light to travel one centimeter in a vacuum */
export type Jiffy = ConversionUnit<"Jiffy", Equal<33.3564, Picosecond>>;
export const jiffy: Jiffy = conversionUnit("Jiffy", equal(33.3564, picosecond));

/** "A minute" - the amount of time someone says when they mean 5 minutes */
export type AMinute = ConversionUnit<"AMinute", Equal<5, Minute>>;
export const aminute: AMinute = conversionUnit("AMinute", equal(5, minute));

/** Fame dimension - for measuring celebrity status */
export type Fame = Dimension<"Fame">;
export const fame: Fame = dimension("Fame");

/** Warhol unit - inspired by "15 minutes of fame" */
export type Warhol = Unit<"Warhol", Fame>;
export const warhol: Warhol = unit("Warhol", fame);
