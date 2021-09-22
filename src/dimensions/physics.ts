// https://en.wikipedia.org/wiki/SI_base_unit

import { Dimension, dimension } from "./dimension";
import { Divide, divide, Power, power } from "./helpers";
import { ComposedDimension, composedDimension } from "./composedDimension";

// Basic physics dimensions
export type Length = Dimension<"Length">;
export type L = Length;
export const length: Length = dimension("Length");

export type Mass = Dimension<"Mass">;
export type M = Mass;
export const mass: Mass = dimension("Mass");

export type Time = Dimension<"Time">;
export type T = Time;
export const time: T = dimension("Time");

export type ElectricCurrent = Dimension<"ElectricCurrent">;
export type I = ElectricCurrent;
export const electricCurrent: ElectricCurrent = dimension("ElectricCurrent");

export type Temperature = Dimension<"Temperature">;
export type Θ = Temperature;
export const temperature: Temperature = dimension("Temperature");

export type AmountOfSubstance = Dimension<"AmountOfSubstance">;
export type N = AmountOfSubstance;
export const amountOfSubstance: AmountOfSubstance =
  dimension("AmountOfSubstance");

export type LuminousIntensity = Dimension<"LuminousIntensity">;
export type J = LuminousIntensity;
export const luminousIntensity: LuminousIntensity =
  dimension("LuminousIntensity");

export type PhysicsDimension = L | M | T | I | Θ | N | J;

// Composed dimensions
export type Speed = ComposedDimension<"Speed", Divide<Length, Time>>;
export const speed: Speed = composedDimension("Speed", divide(length, time));

export type Area = ComposedDimension<"Area", Power<Length, 2>>;
export const area: Area = composedDimension("Area", power(length, 2));

export type Volume = ComposedDimension<"Volume", Power<Length, 3>>;
export const volume: Volume = composedDimension("Volume", power(length, 3));

export type Hypervolume = ComposedDimension<"Hypervolume", Power<Length, 4>>;
export const hypervolume: Hypervolume = composedDimension(
  "Hypervolume",
  power(length, 4)
);

export type Frequency = ComposedDimension<"Frequency", Power<Time, -1>>;
export const frequency: Frequency = composedDimension(
  "Frequency",
  power(time, -1)
);
