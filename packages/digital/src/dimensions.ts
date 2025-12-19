// https://en.wikipedia.org/wiki/Bit

import type { Dimension, Quantity, Divide } from "@quantits/core";
import { dimension, quantity, divide } from "@quantits/core";
import type { Time } from "@quantits/physics";
import { time } from "@quantits/physics";

/** Basic digital dimension: Information */
export type Information = Dimension<"Information">;
export const information: Information = dimension("Information");

export type DigitalDimension = Information;

/** Composed digital dimension: Bandwidth (Information per Time) */
export type Bandwidth = Quantity<"Bandwidth", Divide<Information, Time>>;
export const bandwidth: Bandwidth = quantity("Bandwidth", divide(information, time));

