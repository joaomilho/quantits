// https://en.wikipedia.org/wiki/Bit

import type { Dimension, Quantity } from "../core.js";
import { dimension, quantity } from "../core.js";
import type { Divide } from "./helpers.js";
import { divide } from "./helpers.js";
import type { Time } from "./physics.js";
import { time } from "./physics.js";

/** Basic digital dimension: Information */
export type Information = Dimension<"Information">;
export const information: Information = dimension("Information");

export type DigitalDimension = Information;

/** Composed digital dimension: Bandwidth (Information per Time) */
export type Bandwidth = Quantity<"Bandwidth", Divide<Information, Time>>;
export const bandwidth: Bandwidth = quantity("Bandwidth", divide(information, time));
