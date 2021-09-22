import { Divide, divide } from "../helpers";
import { Dimension, dimension } from "../dimension";
import { Time, time } from "../simple/physics";
import { information, Information } from "../simple/digital";

export type Bandwidth = Dimension<"Bandwidth", Divide<Information, Time>>;
export const bandwidth: Bandwidth = dimension(
  "Bandwidth",
  divide(information, time)
);
