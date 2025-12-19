// Example: Humorous and unconventional units
// These are examples of how to define custom units with QuantiTS

import type { ConversionUnit, Dimension, Unit, Equal } from "../src/index.js";
import { conversionUnit, dimension, unit, equal } from "../src/index.js";

// Note: In real usage, you would import from @quantits/physics
// import type { Minute, Picosecond } from "@quantits/physics";
// import { minute, picosecond } from "@quantits/physics";

// For this example, we'll define placeholder types
type Minute = any;
type Picosecond = any;
declare const minute: Minute;
declare const picosecond: Picosecond;

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
