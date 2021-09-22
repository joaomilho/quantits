// https://en.wikipedia.org/wiki/Bit

import { Dimension, dimension } from "./dimension";

// Basic digital dimensions
export type Information = Dimension<"Information">;
export const information: Information = dimension("Information");

export type DigitalDimension = Information;
