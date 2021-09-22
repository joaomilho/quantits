export * from "./physics";
export * from "./digital";

import { DigitalDimension } from "./digital";
import { PhysicsDimension } from "./physics";

export type SimpleDimension = PhysicsDimension | DigitalDimension;
