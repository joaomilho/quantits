import Decimal from "decimal.js";
import { subtract, Subtract } from ".";
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
  Density,
  density,
} from "../dimensions/physics";

import {
  Centi,
  centi,
  conv2,
  Conv2,
  conv3,
  Conv3,
  Conv4,
  conv4,
  equal,
  Equal,
  kilo,
  Kilo,
  mili,
  Mili,
  Pico,
  pico,
  sixty,
  Sixty,
  sum,
  Sum,
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

export type LightYear = ConversionUnit<
  "LightYear",
  Equal<9460730472580800, Meter>
>;
export const lightYear: LightYear = conversionUnit(
  "LightYear",
  equal(9460730472580800, meter)
);
export const lightYears = lightYear;

// Volume
export type Liter = ConversionUnit<"Liter", Equal<0.001, CubicMeter>>;
export const liter: Liter = conversionUnit("Liter", equal(0.001, cubicMeter));

// Time
export type Picosecond = Pico<Second>;
export const picosecond: Picosecond = pico(second);
export const picoseconds = picosecond;

export type Milisecond = Mili<Second>;
export const milisecond: Milisecond = mili(second);
export const miliseconds = milisecond;

export type Minute = Sixty<Second, "Minute">;
export const minute: Minute = sixty(seconds, "Minute");
export const minutes = minute;

export type Hour = Sixty<Minute, "Hour">;
export const hour: Hour = sixty(minutes, "Hour");
export const hours = hour;

export type Day = ConversionUnit<"Day", Equal<24, Hour>>;
export const day: Day = conversionUnit("Day", equal(24, hours));
export const days = day;

export type Week = ConversionUnit<"Week", Equal<7, Day>>;
export const week: Week = conversionUnit("Week", equal(7, days));
export const weeks = week;

export type LunarSynodicMonth = ConversionUnit<
  "LunarSynodicMonth",
  Equal<14.77, Day>
>;
export const lunarSynodicMonth: LunarSynodicMonth = conversionUnit(
  "LunarSynodicMonth",
  equal(14.77, days)
);
export const lunarSynodicMonths = lunarSynodicMonth;

export type Fortnight = ConversionUnit<"Fortnight", Equal<14, Day>>;
export const fortnight: Fortnight = conversionUnit(
  "Fortnight",
  equal(14, days)
);
export const fortnights = fortnight;

export type Year = ConversionUnit<"Year", Equal<365.25, Day>>; // Sort of...
export const year: Year = conversionUnit("Year", equal(365.25, days));
export const years = year;

export type TropicalYear = ConversionUnit<
  "TropicalYear",
  Equal<365.24219, Day>
>;
export const tropicalYear: TropicalYear = conversionUnit(
  "TropicalYear",
  equal(365.24219, days)
);
export const tropicalYears = tropicalYear;

export type SiderealYear = ConversionUnit<
  "SiderealYear",
  Equal<365.256363004, Day>
>;
export const siderealYear: SiderealYear = conversionUnit(
  "SiderealYear",
  equal(365.256363004, days)
);
export const siderealYears = siderealYear;

export type Lustrum = ConversionUnit<"Lustrum", Equal<5, Year>>;
export const lustrum: Lustrum = conversionUnit("Lustrum", equal(5, year));

export type Decade = ConversionUnit<"Decade", Equal<10, Year>>;
export const decade: Decade = conversionUnit("Decade", equal(10, year));
export const decades = decade;

export type Century = ConversionUnit<"Century", Equal<100, Year>>;
export const century: Century = conversionUnit("Century", equal(100, year));
export const centuries = century;

export type Millenium = ConversionUnit<"Millenium", Equal<1000, Year>>;
export const millenium: Millenium = conversionUnit(
  "Millenium",
  equal(1000, year)
);
export const millenia = millenium;

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

export type Fahrenheit = Conv4<
  "Fahrenheit",
  Kelvin,
  ["-", 32],
  ["*", 5],
  ["/", 9],
  ["+", 273.15]
>;

export const fahrenheit: Fahrenheit = conv4(
  "Fahrenheit",
  kelvin,
  ["-", 32 as const],
  ["*", 5 as const],
  ["/", 9 as const],
  ["+", 273.15 as const]
);

export type MassPerUnitVolume = ComposedUnit<
  "MassPerUnitVolume",
  Density,
  [Kilogram, CubicMeter]
>;

export const massPerUnitVolume: MassPerUnitVolume = composedUnit(
  "MassPerUnitVolume",
  density,
  [kilogram, cubicMeter]
);

// Planck

export type PlanckLength = ConversionUnit<
  "PlanckLength",
  Equal<1.616255e-35, Meter>
>;
export const planckLength: PlanckLength = conversionUnit(
  "PlanckLength",
  equal(1.616255e-35, meter)
);

export type PlanckTime = ConversionUnit<"PlanckTime", Equal<5.39e-44, Second>>;
export const planckTime: PlanckTime = conversionUnit(
  "PlanckTime",
  equal(5.39e-44, second)
);

export type PlanckMass = ConversionUnit<
  "PlanckMass",
  Equal<2.176434e-8, Kilogram>
>;
export const planckMass: PlanckMass = conversionUnit(
  "PlanckMass",
  equal(2.176434e-8, kilogram)
);

export type PlanckTemperature = ConversionUnit<
  "PlanckTemperature",
  Equal<1.416784e32, Kelvin>
>;
export const planckTemperature: PlanckTemperature = conversionUnit(
  "PlanckTemperature",
  equal(1.416784e32, kelvin)
);
