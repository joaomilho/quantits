import { Dimension, dimension, Unit, unit } from "./core";

// Pain
export type Pain = Dimension<"Pain">;
export const pain: Pain = dimension("Pain");

export type Dol = Unit<"Dol", Pain>;
export const dol: Dol = unit("Dol", pain);

// Pungency
export type Pungency = Dimension<"Pungency">;
export const pungency: Pungency = dimension("Pungency");

export type Scoville = Unit<"Scoville", Pungency>;
export const scoville: Scoville = unit("Scoville", pungency);
