import { Unit, unit } from "./unit";
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
} from "../dimensions/physics";
import { composedUnit, ComposedUnit } from "./composedUnit";
import {
  Centi,
  centi,
  conversionUnit,
  ConversionUnit,
  equal,
  Equal,
  kilo,
  Kilo,
  sixty,
  Sixty,
} from "./conversionUnit";

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

// TODO
// export type KilometerPerHour = ComposedUnit<
//   "KilometerPerHour",
//   Speed,
//   [Kilometer, Hour]
// >;
// export const kilometerPerHour: KilometerPerHour = composedUnit(
//   "KilometerPerHour",
//   speed,
//   [meter, second]
// );

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
