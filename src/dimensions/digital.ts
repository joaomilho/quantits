// https://en.wikipedia.org/wiki/Bit

import { Dimension, dimension } from "./dimension";
import { Divide, divide } from "./helpers";
import { composedDimension, ComposedDimension } from "./composedDimension";
import { Time, time } from "./physics";

// Basic digital dimensions
export type Information = Dimension<"Information">;
export const information: Information = dimension("Information");

export type DigitalDimension = Information;

// Composed digital dimensions
export type Bandwidth = ComposedDimension<
  "Bandwidth",
  Divide<Information, Time>
>;
export const bandwidth: Bandwidth = composedDimension(
  "Bandwidth",
  divide(information, time)
);
