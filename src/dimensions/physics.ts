// https://en.wikipedia.org/wiki/SI_base_unit

import { Dimension, dimension } from "./dimension";
import {
  Divide,
  divide,
  multiply,
  Multiply,
  Power as Pow,
  power as pow,
} from "./helpers";
import { Quantity, quantity } from "./composedDimension";

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
export type Speed = Quantity<"Speed", Divide<Length, Time>>;
export const speed: Speed = quantity("Speed", divide(length, time));

export type Acceleration = Quantity<"Acceleration", Divide<Speed, Time>>;
export const acceleration: Acceleration = quantity(
  "Acceleration",
  divide(speed, time)
);

export type Area = Quantity<"Area", Pow<Length, 2>>;
export const area: Area = quantity("Area", pow(length, 2));

export type Volume = Quantity<"Volume", Pow<Length, 3>>;
export const volume: Volume = quantity("Volume", pow(length, 3));

export type Hypervolume = Quantity<"Hypervolume", Pow<Length, 4>>;
export const hypervolume: Hypervolume = quantity("Hypervolume", pow(length, 4));

export type Frequency = Quantity<"Frequency", Pow<Time, -1>>;
export const frequency: Frequency = quantity("Frequency", pow(time, -1));

export type Wavenumber = Quantity<"Wavenumber", Pow<Length, -1>>;
export const wavenumber: Wavenumber = quantity("Wavenumber", pow(length, -1));

export type Density = Quantity<"Density", Divide<Mass, Volume>>;
export const density: Density = quantity("Density", divide(mass, volume));

export type SurfaceDensity = Quantity<"SurfaceDensity", Divide<Mass, Area>>;
export const surfaceDensity: SurfaceDensity = quantity(
  "SurfaceDensity",
  divide(mass, area)
);

export type SpecificVolume = Quantity<"SpecificVolume", Divide<Volume, Mass>>;
export const specificVolume: SpecificVolume = quantity(
  "SpecificVolume",
  divide(volume, mass)
);

export type CurrentDensity = Quantity<
  "CurrentDensity",
  Divide<ElectricCurrent, Area>
>;
export const currentDensity: CurrentDensity = quantity(
  "CurrentDensity",
  divide(electricCurrent, area)
);

export type MagneticFieldStrength = Quantity<
  "MagneticFieldStrength",
  Divide<ElectricCurrent, Length>
>;
export const magneticFieldStrength: MagneticFieldStrength = quantity(
  "MagneticFieldStrength",
  divide(electricCurrent, length)
);

export type AmountConcentration = Quantity<
  "AmountConcentration",
  Divide<AmountOfSubstance, Volume>
>;
export const amountConcentration: AmountConcentration = quantity(
  "AmountConcentration",
  divide(amountOfSubstance, volume)
);

export type Concentration = AmountConcentration;
export const concentraction = amountConcentration;

export type MassConcentration = Quantity<
  "MassConcentration",
  Divide<Mass, Volume>
>;
export const massConcentration: MassConcentration = quantity(
  "MassConcentration",
  divide(mass, volume)
);

export type Luminance = Quantity<"Luminance", Divide<LuminousIntensity, Area>>;
export const luminance: Luminance = quantity(
  "Luminance",
  divide(luminousIntensity, area)
);

export type Force = Quantity<"Force", Multiply<Acceleration, Mass>>;
export const force: Force = quantity("Force", multiply(acceleration, mass));

export type Pressure = Quantity<"Pressure", Divide<Force, Area>>;
export const pressure: Pressure = quantity("Pressure", divide(force, area));

export type Energy = Quantity<"Energy", Multiply<Force, Length>>;
export const energy: Energy = quantity("Energy", multiply(force, length));

export type Work = Energy;
export const work = energy;

export type Power = Quantity<"Power", Divide<Energy, Time>>;
export const power: Power = quantity("Power", divide(energy, time));

export type ElectricCharge = Quantity<
  "ElectricCharge",
  Multiply<ElectricCurrent, Time>
>;
export const electricCharge: ElectricCharge = quantity(
  "ElectricCharge",
  multiply(electricCurrent, time)
);
