// https://en.wikipedia.org/wiki/SI_base_unit

import { Dimension, dimension, Quantity, quantity } from "../core";
import { Divide, divide, multiply, Multiply, Pow, pow } from "./helpers";

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

// Scalar
export type RefractiveIndex = Dimension<"RefractiveIndex">;
export const refractiveIndex = dimension("RefractiveIndex");

export type RelativePermeability = Dimension<"RelativePermeability">;
export const relativePermeability = dimension("RelativePermeability");

export type PlaneAngle = Dimension<"PlaneAngle">;
export const planeAngle = dimension("PlaneAngle");

export type SolidAngle = Dimension<"SolidAngle">;
export const solidAngle = dimension("SolidAngle");

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

export type Stress = Pressure;
const stress: Stress = pressure;

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

export type ElectricPotentialDifference = Quantity<
  "ElectricPotentialDifference",
  Divide<Power, ElectricCurrent>
>;
export const electricPotentialDifference: ElectricPotentialDifference =
  quantity("ElectricPotentialDifference", divide(power, electricCurrent));

export type Capacitance = Quantity<
  "Capacitance",
  Divide<ElectricCharge, ElectricPotentialDifference>
>;
export const capacitance: Capacitance = quantity(
  "Capacitance",
  divide(electricCharge, electricPotentialDifference)
);

export type ElectricResistance = Quantity<
  "ElectricResistance",
  Divide<ElectricPotentialDifference, ElectricCurrent>
>;
export const electricResistance: ElectricResistance = quantity(
  "ElectricResistance",
  divide(electricPotentialDifference, electricCurrent)
);

export type ElectricConductance = Quantity<
  "ElectricConductance",
  Divide<ElectricCurrent, ElectricPotentialDifference>
>;
export const electricConductance: ElectricConductance = quantity(
  "ElectricConductance",
  divide(electricCurrent, electricPotentialDifference)
);

export type MagneticFlux = Quantity<
  "MagneticFlux",
  Multiply<Time, ElectricPotentialDifference>
>;
export const magneticFlux: MagneticFlux = quantity(
  "MagneticFlux",
  multiply(time, electricPotentialDifference)
);

export type MagneticFluxDensity = Quantity<
  "MagneticFluxDensity",
  Divide<MagneticFlux, Area>
>;
export const magneticFluxDensity: MagneticFluxDensity = quantity(
  "MagneticFluxDensity",
  divide(magneticFlux, area)
);

export type Inductance = Quantity<
  "MagneticFluxDensity",
  Divide<MagneticFlux, ElectricCurrent>
>;
export const inductance: Inductance = quantity(
  "MagneticFluxDensity",
  divide(magneticFlux, electricCurrent)
);

export type LuminousFlux = Quantity<
  "LuminousFlux",
  Multiply<LuminousIntensity, SolidAngle>
>;
export const luminousFlux: LuminousFlux = quantity(
  "LuminousFlux",
  multiply(luminousIntensity, solidAngle)
);

export type Illuminance = Quantity<
  "MagneticFluxDensity",
  Divide<LuminousFlux, Area>
>;
export const illuminance: Illuminance = quantity(
  "MagneticFluxDensity",
  divide(luminousFlux, area)
);

export type AbsorbedDose = Quantity<"AbsorbedDose", Divide<Energy, Mass>>;
export const absorbedDose: AbsorbedDose = quantity(
  "AbsorbedDose",
  divide(energy, mass)
);

export type SpecificEnergy = AbsorbedDose;
export const specificEnergy = absorbedDose;

export type Kerma = AbsorbedDose;
export const kerma = absorbedDose;

export type CatalyticActivity = Quantity<
  "CatalyticActivity",
  Divide<AmountOfSubstance, Time>
>;
export const catalyticActivity: CatalyticActivity = quantity(
  "CatalyticActivity",
  divide(amountOfSubstance, time)
);

export type DynamicViscosity = Quantity<
  "CatalyticActivity",
  Multiply<Stress, Time>
>;
export const dynamicViscosity: DynamicViscosity = quantity(
  "CatalyticActivity",
  multiply(stress, time)
);

export type KinematicViscosity = Quantity<
  "KinematicViscosity",
  Divide<Area, Time>
>;
export const kinematicViscosity: KinematicViscosity = quantity(
  "KinematicViscosity",
  divide(area, time)
);

export type MomentOfForce = Quantity<"MomentOfForce", Multiply<Force, Length>>;
export const momentOfForce: MomentOfForce = quantity(
  "MomentOfForce",
  multiply(force, length)
);

export type Moment = MomentOfForce;
export const moment = momentOfForce;

export type Torque = MomentOfForce;
export const torque = momentOfForce;

export type SurfaceTension = Quantity<"SurfaceTension", Divide<Force, Length>>;
export const surfaceTension: SurfaceTension = quantity(
  "SurfaceTension",
  divide(force, length)
);

// AngularVelocity : Quantity
// AngularVelocity = PlaneAngle </> Time

// AngularAcceleration : Quantity
// AngularAcceleration = AngularVelocity </> Time

export type HeatFluxDensity = Quantity<"HeatFluxDensity", Divide<Power, Area>>;
export const heatFluxDensity: HeatFluxDensity = quantity(
  "HeatFluxDensity",
  divide(power, area)
);

export type Irradiance = HeatFluxDensity;
export const irradiance = heatFluxDensity;

export type HeatCapacity = Quantity<
  "HeatCapacity",
  Divide<Energy, Temperature>
>;
export const heatCapacity: HeatCapacity = quantity(
  "HeatCapacity",
  divide(energy, temperature)
);

export type Entropy = HeatCapacity;
export const entropy = heatCapacity;

export type SpecificHeatCapacity = Quantity<
  "SpecificHeatCapacity",
  Divide<HeatCapacity, Mass>
>;
export const specificHeatCapacity: SpecificHeatCapacity = quantity(
  "SpecificHeatCapacity",
  divide(heatCapacity, mass)
);

export type SpecificEntropy = SpecificHeatCapacity;
export const SpecificEntropy = specificHeatCapacity;

// ThermalConductivity : Quantity
// ThermalConductivity = Power </> (Length <*> Temperature)

// TODO
// export type ThermalConductivity = Quantity<
//   "ThermalConductivity",
//   Divide<Power, Multiply<Length, Temperature>>
// >;
// export const thermalConductivity: ThermalConductivity = quantity(
//   "ThermalConductivity",
//   divide(length, temperature)
// );

export type EnergyDensity = Quantity<"EnergyDensity", Divide<Energy, Volume>>;
export const energyDensity: EnergyDensity = quantity(
  "EnergyDensity",
  divide(energy, volume)
);

export type ElectricFieldStrength = Quantity<
  "ElectricFieldStrength",
  Divide<ElectricPotentialDifference, Length>
>;
export const electricFieldStrength: ElectricFieldStrength = quantity(
  "ElectricFieldStrength",
  divide(electricPotentialDifference, length)
);

export type ElectricChargeDensity = Quantity<
  "ElectricChargeDensity",
  Divide<ElectricCharge, Volume>
>;
export const electricChargeDensity: ElectricChargeDensity = quantity(
  "ElectricChargeDensity",
  divide(electricCharge, volume)
);

export type SurfaceChargeDensity = Quantity<
  "SurfaceChargeDensity",
  Divide<ElectricCharge, Area>
>;
export const surfaceChargeDensity: SurfaceChargeDensity = quantity(
  "SurfaceChargeDensity",
  divide(electricCharge, area)
);

export type ElectricFluxDensity = SurfaceChargeDensity;
export const electricFluxDensity = surfaceChargeDensity;

export type ElectricDisplacement = SurfaceChargeDensity;
export const electricDisplacement = surfaceChargeDensity;

export type Permittivity = Quantity<
  "Permittivity",
  Divide<Capacitance, Length>
>;
export const permittivity: Permittivity = quantity(
  "Permittivity",
  divide(capacitance, length)
);

export type Permeability = Quantity<"Permeability", Divide<Inductance, Length>>;
export const permeability: Permeability = quantity(
  "Permeability",
  divide(inductance, length)
);

export type MolarEnergy = Quantity<
  "MolarEnergy",
  Divide<Energy, AmountOfSubstance>
>;
export const molarEnergy: MolarEnergy = quantity(
  "MolarEnergy",
  divide(energy, amountOfSubstance)
);

export type MolarHeatCapacity = MolarEnergy;
export const molarHeatCapacity = molarEnergy;

export type Exposure = Quantity<"Exposure", Divide<ElectricCharge, Mass>>;
export const exposure: Exposure = quantity(
  "Exposure",
  divide(electricCharge, mass)
);

export type AbsorbedDoseRate = Quantity<
  "AbsorbedDoseRate",
  Divide<AbsorbedDose, Time>
>;
export const absorbedDoseRate: AbsorbedDoseRate = quantity(
  "AbsorbedDoseRate",
  divide(absorbedDose, time)
);

export type RadiantIntensity = Quantity<
  "RadiantIntensity",
  Divide<Power, SolidAngle>
>;
export const radiantIntensity: RadiantIntensity = quantity(
  "RadiantIntensity",
  divide(power, solidAngle)
);

export type Radiance = Quantity<"Radiance", Divide<RadiantIntensity, Area>>;
export const radiance: Radiance = quantity(
  "Radiance",
  divide(radiantIntensity, area)
);

export type CatalyticActivityConcentration = Quantity<
  "CatalyticActivityConcentration",
  Divide<CatalyticActivity, Volume>
>;
export const catalyticActivityConcentration: CatalyticActivityConcentration =
  quantity("CatalyticActivityConcentration", divide(catalyticActivity, volume));
