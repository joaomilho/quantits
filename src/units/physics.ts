import {
  Unit,
  unit,
  composedUnit,
  ComposedUnit,
  conversionUnit,
  ConversionUnit,
} from "../core";
import {
  Length,
  length,
  Mass,
  mass,
  ElectricCurrent,
  electricCurrent,
  time,
  Time,
  temperature,
  Temperature,
  AmountOfSubstance,
  amountOfSubstance,
  LuminousIntensity,
  luminousIntensity,
  Area,
  area,
  Speed,
  speed,
  Volume,
  volume,
  Hypervolume,
  hypervolume,
  frequency,
  Frequency,
  PlaneAngle,
  planeAngle,
  SolidAngle,
  solidAngle,
  ElectricCharge,
  electricCharge,
  LuminousFlux,
  luminousFlux,
  CatalyticActivity,
  catalyticActivity,
} from "../dimensions/physics";

import {
  Centi,
  centi,
  equal,
  Equal,
  kilo,
  Kilo,
  sixty,
  Sixty,
} from "./helpers";

// Basic physics units

export type Second = Unit<"Second", Time>;
export const second: Second = unit("Second", time);
export const seconds = second;
export const s = second;

export type Meter = Unit<"Meter", Length>;
export const meter: Meter = unit("Meter", length);
export const meters = meter;
export const m = meter;

export type Kilogram = Unit<"Kilogram", Mass>;
export const kilogram: Kilogram = unit("Kilogram", mass);
export const kilograms = kilogram;
export const kg = kilogram;

export type Ampere = Unit<"Ampere", ElectricCurrent>;
export const ampere: Ampere = unit("Ampere", electricCurrent);
export const amperes = ampere;
export const A = ampere;

export type Kelvin = Unit<"Kelvin", Temperature>;
export const kelvin: Kelvin = unit("Kelvin", temperature);
export const kelvins = kelvin;
export const K = kelvin;

export type Mole = Unit<"Mole", AmountOfSubstance>;
export const mole: Mole = unit("Mole", amountOfSubstance);
export const moles = mole;
export const mol = mole;

export type Candela = Unit<"Candela", LuminousIntensity>;
export const candela: Candela = unit("Candela", luminousIntensity);
export const candelas = candela;
export const cd = candela;

export type PhysicsUnit =
  | Second
  | Meter
  | Kilogram
  | Ampere
  | Kelvin
  | Mole
  | Candela;

// Composed physics units

export type MeterPerSecond = ComposedUnit<
  "MeterPerSecond",
  Speed,
  [Meter, Second]
>;
export const meterPerSecond: MeterPerSecond = composedUnit(
  "MeterPerSecond",
  speed,
  [meter, second]
);

export type SquareMeter = ComposedUnit<"SquareMeter", Area, [Meter]>;
export const squareMeter: SquareMeter = composedUnit("SquareMeter", area, [
  meter,
]);

export type CubicMeter = ComposedUnit<"CubicMeter", Volume, [Meter]>;
export const cubicMeter: CubicMeter = composedUnit("CubicMeter", volume, [
  meter,
]);

export type HypercubicMeter = ComposedUnit<
  "HypercubicMeter",
  Hypervolume,
  [Meter]
>;
export const hypercubicMeter: HypercubicMeter = composedUnit(
  "HypercubicMeter",
  hypervolume,
  [meter]
);

export type Hertz = ComposedUnit<"Hertz", Frequency, [Second]>;
export const hertz: Hertz = composedUnit("Hertz", frequency, [second]);

export type Becquerel = Hertz;
export const becquerel = hertz;

//

// export type Kilometer = Kilo<Meter>;
// export const kilometer: Kilometer = kilo(meter);
// export const kilometers = kilometer;

export type Centimeter = Centi<Meter>;
export const centimeter: Centimeter = centi(meter);
export const centimeters = centimeter;

export type Kilometer = Kilo<Meter>;
export const kilometer: Kilometer = kilo(meter);
export const kilometers = kilometer;

export type Liter = ConversionUnit<"Liter", Equal<0.01, SquareMeter>>;
export const liter: Liter = conversionUnit("Liter", equal(0.01, squareMeter));

export type Minute = Sixty<Second, "Minute">;
export const minute: Minute = sixty(second, "Minute");
export const minutes = minute;

export type Hour = ConversionUnit<"Hour", Equal<3600, Second>>;
export const hour: Hour = conversionUnit("Hour", equal(3600, second));
export const hours = hour;

export type KilometerPerHour = ComposedUnit<
  "KilometerPerHour",
  Speed,
  [Kilometer, Hour]
>;
export const kilometerPerHour: KilometerPerHour = composedUnit(
  "KilometerPerHour",
  speed,
  [kilometer, hour]
);

export type KilometerPerSecond = ComposedUnit<
  "KilometerPerSecond",
  Speed,
  [Kilometer, Second]
>;
export const kilometerPerSecond: KilometerPerSecond = composedUnit(
  "KilometerPerSecond",
  speed,
  [kilometer, second]
);

export type Radian = Unit<"Radian", PlaneAngle>;
export const radian: Radian = unit("Radian", planeAngle);

export type Rad = Radian;
export const radi = radian;

export type Steradian = Unit<"Steradian", SolidAngle>;
export const steradian: Steradian = unit("Steradian", solidAngle);

// TODO
// Newton : Unit Force'
// Newton = ((Metre <//> Second) <//> Second) <**> Kilogram
// N : Unit Force'
// N = Newton

// export type Newton = ComposedUnit<"Newton", Force, [Acceleration, Mass]>;
// export const newton: Coulomb = composedUnit("Newton", force, [
//   acceleration,
//   mass,
// ]);

// TODO
// Pascal : Unit Pressure
// Pascal = Newton <//> (Metre ^^ 2)
// Pa : Unit Pressure
// Pa = Pascal

// Joule : Unit Energy
// Joule = Newton <**> Metre
// J : Unit Energy
// J = Joule

// Watt : Unit Power
// Watt = Joule <//> Second
// W : Unit Power
// W = Watt

export type Coulomb = ComposedUnit<"Coulomb", ElectricCharge, [Second, Ampere]>;
export const coulomb: Coulomb = composedUnit("Coulomb", electricCharge, [
  second,
  ampere,
]);

// Volt : Unit ElectricPotentialDifference
// Volt = Watt <//> Ampere
// V : Unit ElectricPotentialDifference
// V = Volt

// Farad : Unit Capacitance
// Farad = Coulomb <//> Volt
// F : Unit Capacitance
// F = Farad

// Ohm : Unit ElectricResistance
// Ohm = Volt <//> Ampere

// Siemens : Unit ElectricConductance
// Siemens = Ampere <//> Volt
// S : Unit ElectricConductance
// S = Siemens

// Weber : Unit MagneticFlux
// Weber = Second <**> Volt
// Wb : Unit MagneticFlux
// Wb = Weber

// Tesla : Unit MagneticFluxDensity
// Tesla = Weber <//> (Metre ^^ 2)
// T : Unit MagneticFluxDensity
// T = Tesla

// Henry : Unit Inductance
// Henry = Weber <//> Ampere
// H : Unit Inductance
// H = Henry

// -- For relative temperature measurements
// Celsius : Unit Temperature
// Celsius = Kelvin
// DC : Unit Temperature
// DC = Celsius

export type Lumen = ComposedUnit<"Lumen", LuminousFlux, [Candela, Steradian]>;
export const lumen: Lumen = composedUnit("Lumen", luminousFlux, [
  candela,
  steradian,
]);

// Lux : Unit Illuminance
// Lux = Lumen <//> (Metre ^^ 2)
// Lx : Unit Illuminance
// Lx = Lux

// Bq : Unit ActivityReferredToARadionuclide
// Bq = Becquerel

// Gray : Unit AbsorbedDose
// Gray = Joule <//> Kilogram
// Gy : Unit AbsorbedDose
// Gy = Gray

// Sievert : Unit DoseEquivalent
// Sievert = Joule <//> Kilogram
// Sv : Unit DoseEquivalent
// Sv = Sievert

export type Katal = ComposedUnit<"Katal", CatalyticActivity, [Mole, Second]>;
export const katal: Katal = composedUnit("Katal", catalyticActivity, [
  mol,
  second,
]);
