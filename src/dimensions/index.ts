export * from "./physics.js";
export * from "./digital.js";

import type { DigitalDimension } from "./digital.js";
import type { PhysicsDimension } from "./physics.js";

export type SimpleDimension = PhysicsDimension | DigitalDimension;

export * from "./helpers.js";
