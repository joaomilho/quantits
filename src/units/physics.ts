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
  Acceleration,
  acceleration,
  Force,
  force,
  Pressure,
  pressure,
  Energy,
  energy,
  Power,
  power,
  ElectricPotentialDifference,
  electricPotentialDifference,
  Capacitance,
  capacitance,
  ElectricResistance,
  electricResistance,
  ElectricConductance,
  electricConductance,
  MagneticFlux,
  magneticFlux,
  MagneticFluxDensity,
  magneticFluxDensity,
  Inductance,
  inductance,
  Illuminance,
  illuminance,
  AbsorbedDose,
  absorbedDose,
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
  sum,
  Sum,
  multiply,
  Multiply,
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

// Length
export type Centimeter = Centi<Meter>;
export const centimeter: Centimeter = centi(meter);
export const centimeters = centimeter;

export type Kilometer = Kilo<Meter>;
export const kilometer: Kilometer = kilo(meter);
export const kilometers = kilometer;

// Volume
export type Liter = ConversionUnit<"Liter", Equal<0.01, SquareMeter>>;
export const liter: Liter = conversionUnit("Liter", equal(0.01, squareMeter));

// Time
export type Minute = Sixty<Second, "Minute">;
export const minute: Minute = sixty(second, "Minute");
export const minutes = minute;

export type Hour = ConversionUnit<"Hour", Equal<3600, Second>>;
export const hour: Hour = conversionUnit("Hour", equal(3600, second));
export const hours = hour;

// Speed
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

export type MeterPerSecondSquare = ComposedUnit<
  "MeterPerSecondSquare",
  Acceleration,
  [MeterPerSecond, Second]
>;
export const meterPerSecondSquare: MeterPerSecondSquare = composedUnit(
  "MeterPerSecondSquare",
  acceleration,
  [meterPerSecond, second]
);

export type Newton = ComposedUnit<
  "Newton",
  Force,
  [MeterPerSecondSquare, Kilogram]
>;
export const newton: Newton = composedUnit("Newton", force, [
  meterPerSecondSquare,
  kilogram,
]);

export type Pascal = ComposedUnit<"Pascal", Pressure, [Newton, SquareMeter]>;
export const pascal: Pascal = composedUnit("Pascal", pressure, [
  newton,
  squareMeter,
]);

export type Joule = ComposedUnit<"Joule", Energy, [Newton, Meter]>;
export const joule: Joule = composedUnit("Joule", energy, [newton, meter]);

export type Watt = ComposedUnit<"Watt", Power, [Joule, Second]>;
export const watt: Watt = composedUnit("Watt", power, [joule, second]);

export type Coulomb = ComposedUnit<"Coulomb", ElectricCharge, [Second, Ampere]>;
export const coulomb: Coulomb = composedUnit("Coulomb", electricCharge, [
  second,
  ampere,
]);

export type Volt = ComposedUnit<
  "Volt",
  ElectricPotentialDifference,
  [Watt, Ampere]
>;
export const volt: Volt = composedUnit("Volt", electricPotentialDifference, [
  watt,
  ampere,
]);

export type Farad = ComposedUnit<"Farad", Capacitance, [Coulomb, Volt]>;
export const farad: Farad = composedUnit("Farad", capacitance, [coulomb, volt]);

export type Ohm = ComposedUnit<"Ohm", ElectricResistance, [Volt, Ampere]>;
export const ohm: Ohm = composedUnit("Ohm", electricResistance, [volt, ampere]);

export type Siemens = ComposedUnit<
  "Siemens",
  ElectricConductance,
  [Ampere, Volt]
>;
export const siemens: Siemens = composedUnit("Siemens", electricConductance, [
  ampere,
  volt,
]);

export type Weber = ComposedUnit<"Weber", MagneticFlux, [Second, Volt]>;
export const weber: Weber = composedUnit("Weber", magneticFlux, [second, volt]);

export type Tesla = ComposedUnit<
  "Tesla",
  MagneticFluxDensity,
  [Weber, SquareMeter]
>;
export const tesla: Tesla = composedUnit("Tesla", magneticFluxDensity, [
  weber,
  squareMeter,
]);

export type Henry = ComposedUnit<"Henry", Inductance, [Weber, Ampere]>;
export const henry: Henry = composedUnit("Henry", inductance, [weber, ampere]);

export type Lumen = ComposedUnit<"Lumen", LuminousFlux, [Candela, Steradian]>;
export const lumen: Lumen = composedUnit("Lumen", luminousFlux, [
  candela,
  steradian,
]);

export type Lux = ComposedUnit<"Lux", Illuminance, [Lumen, SquareMeter]>;
export const lux: Lux = composedUnit("Lux", illuminance, [lumen, squareMeter]);

export type Gray = ComposedUnit<"Gray", AbsorbedDose, [Joule, Kilogram]>;
export const gray: Gray = composedUnit("Gray", absorbedDose, [joule, kilogram]);

export type Sievert = Gray;
export const sievert = gray;

export type Katal = ComposedUnit<"Katal", CatalyticActivity, [Mole, Second]>;
export const katal: Katal = composedUnit("Katal", catalyticActivity, [
  mol,
  second,
]);

// Non standard temperatures

export type Celsius = ConversionUnit<"Celsius", Sum<Kelvin, 273.15>>;
export const celsius: Celsius = conversionUnit("Celsius", sum(kelvin, 273.15));

export type Fahrenheit = ConversionUnit<
  "Fahrenheit",
  Sum<ConversionUnit<"_", Multiply<Kelvin, 1.8>>, 32>
>;
export const farenheit = conversionUnit(
  "Fahrenheit",
  sum(conversionUnit("_", multiply(kelvin, 1.8)), 32)
);
