export * from "./physics";
export * from "./digital";

import { DigitalUnit } from "./digital";
import { PhysicsUnit } from "./physics";

export type SimpleUnit = PhysicsUnit | DigitalUnit;
