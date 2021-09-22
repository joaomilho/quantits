export * from "./simple/physics";
export * from "./simple/digital";

export * from "./complex/physics";
export * from "./complex/digital";

import { DigitalDimension } from "./simple/digital";
import { PhysicsDimension } from "./simple/physics";

export type BasicDimension = PhysicsDimension | DigitalDimension;
