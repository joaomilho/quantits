import {
  Divide,
  divide,
  Multiply,
  multiply,
  Power,
  power,
} from "../../quantities/helpers";
import { Dimension, dimension } from "../dimension";
import { Length, Time, length, time } from "../simple/physics";

export type Speed = Dimension<"Speed", Divide<Length, Time>>;
export const speed: Speed = dimension("Speed", divide(length, time));

export type Area = Dimension<"Area", Multiply<Length, Length>>;
export const area: Area = dimension("Area", multiply(length, length));

export type Volume = Dimension<"Volume", Power<Length, 3>>;
export const volume: Volume = dimension("Volume", power(length, 3));

export type Hypervolume = Dimension<"Hypervolume", Power<Length, 4>>;
export const hypervolume: Hypervolume = dimension(
  "Hypervolume",
  power(length, 4)
);

export type Frequency = Dimension<"Frequency", Power<Time, -1>>;
export const frequency: Frequency = dimension("Frequency", power(time, -1));
