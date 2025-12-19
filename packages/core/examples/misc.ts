// Example: Miscellaneous non-standard units
// These are examples of how to define custom dimensions and units

import type { Dimension, Unit } from "../src/index.js";
import { dimension, unit } from "../src/index.js";

/** Pain dimension - for measuring discomfort */
export type Pain = Dimension<"Pain">;
export const pain: Pain = dimension("Pain");

/** Dol unit - unit of pain intensity */
export type Dol = Unit<"Dol", Pain>;
export const dol: Dol = unit("Dol", pain);

/** Pungency dimension - for measuring spiciness */
export type Pungency = Dimension<"Pungency">;
export const pungency: Pungency = dimension("Pungency");

/** Scoville unit - unit of spicy heat */
export type Scoville = Unit<"Scoville", Pungency>;
export const scoville: Scoville = unit("Scoville", pungency);
