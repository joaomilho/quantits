// https://en.wikipedia.org/wiki/Bit

import { Dimension, dimension, quantity, Quantity } from "../core";
import { Divide, divide } from "./helpers";
import { Time, time } from "./physics";

// Basic digital dimensions
export type Information = Dimension<"Information">;
export const information: Information = dimension("Information");

export type DigitalDimension = Information;

// Composed digital dimensions
export type Bandwidth = Quantity<"Bandwidth", Divide<Information, Time>>;
export const bandwidth: Bandwidth = quantity(
  "Bandwidth",
  divide(information, time)
);
