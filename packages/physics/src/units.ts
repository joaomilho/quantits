import type { ComposedUnit, ConversionUnit, Unit, Calc, Centi, Conv, Equal, Kilo, Micro, Mili, Nano, Pico, Sixty, Sum } from "@quantits/core";
import { composedUnit, conversionUnit, unit, centi, conv, equal, kilo, micro, mili, nano, pico, sixty, sum } from "@quantits/core";

import type {
  AbsorbedDose,
  AbsorbedDoseRate,
  Acceleration,
  Action,
  AmountConcentration,
  AmountOfSubstance,
  AngularAcceleration,
  AngularMomentum,
  AngularVelocity,
  Area,
  Capacitance,
  CatalyticActivity,
  CatalyticActivityConcentration,
  CurrentDensity,
  Density,
  DynamicViscosity,
  ElectricCharge,
  ElectricChargeDensity,
  ElectricConductance,
  ElectricCurrent,
  ElectricalConductivity,
  ElectricalResistivity,
  ElectricFieldStrength,
  ElectricPotentialDifference,
  ElectricResistance,
  Energy,
  EnergyDensity,
  Exposure,
  Force,
  Frequency,
  HeatCapacity,
  HeatFluxDensity,
  HeatTransferCoefficient,
  Hypervolume,
  Illuminance,
  Impulse,
  Inductance,
  Jerk,
  KinematicViscosity,
  Length,
  Luminance,
  LuminousFlux,
  LuminousIntensity,
  MagneticFieldStrength,
  MagneticFlux,
  MagneticFluxDensity,
  Mass,
  MassConcentration,
  MassFlowRate,
  MolarEnergy,
  MolarMass,
  MolarVolume,
  Momentum,
  MomentOfForce,
  Permeability,
  Permittivity,
  PlaneAngle,
  Power,
  Pressure,
  Radiance,
  RadiantIntensity,
  SolidAngle,
  SpecificHeatCapacity,
  SpecificVolume,
  SpectralFluxDensity,
  SpectralPower,
  Speed,
  SurfaceChargeDensity,
  SurfaceDensity,
  SurfaceTension,
  Temperature,
  ThermalConductivity,
  Time,
  Volume,
  VolumetricFlowRate,
  Wavenumber,
} from "./dimensions.js";

import {
  absorbedDose,
  absorbedDoseRate,
  acceleration,
  action,
  amountConcentration,
  amountOfSubstance,
  angularAcceleration,
  angularMomentum,
  angularVelocity,
  area,
  capacitance,
  catalyticActivity,
  catalyticActivityConcentration,
  currentDensity,
  density,
  dynamicViscosity,
  electricCharge,
  electricChargeDensity,
  electricConductance,
  electricCurrent,
  electricalConductivity,
  electricalResistivity,
  electricFieldStrength,
  electricPotentialDifference,
  electricResistance,
  energy,
  energyDensity,
  exposure,
  force,
  frequency,
  heatCapacity,
  heatFluxDensity,
  heatTransferCoefficient,
  hypervolume,
  illuminance,
  impulse,
  inductance,
  jerk,
  kinematicViscosity,
  length,
  luminance,
  luminousFlux,
  luminousIntensity,
  magneticFieldStrength,
  magneticFlux,
  magneticFluxDensity,
  mass,
  massConcentration,
  massFlowRate,
  molarEnergy,
  molarMass,
  molarVolume,
  momentum,
  momentOfForce,
  permeability,
  permittivity,
  planeAngle,
  power,
  pressure,
  radiance,
  radiantIntensity,
  solidAngle,
  specificHeatCapacity,
  specificVolume,
  spectralFluxDensity,
  spectralPower,
  speed,
  surfaceChargeDensity,
  surfaceDensity,
  surfaceTension,
  temperature,
  thermalConductivity,
  time,
  volume,
  volumetricFlowRate,
  wavenumber,
} from "./dimensions.js";

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
export const ps = picosecond;

export type Nanosecond = Nano<Second>;
export const nanosecond: Nanosecond = nano(second);
export const nanoseconds = nanosecond;
export const ns = nanosecond;

export type Microsecond = Micro<Second>;
export const microsecond: Microsecond = micro(second);
export const microseconds = microsecond;
export const μs = microsecond;
export const us = microsecond;

export type Milisecond = Mili<Second>;
export const milisecond: Milisecond = mili(second);
export const miliseconds = milisecond;
export const ms = milisecond;

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

export type Year = ConversionUnit<"Year", Equal<365, Day>>;
export const year: Year = conversionUnit("Year", equal(365, days));
export const years = year;

export type RealYear = ConversionUnit<"Year", Equal<365.25, Day>>;
export const realYear: RealYear = conversionUnit("Year", equal(365.25, days));
export const realYears = realYear;

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

type FahrenheitCalcs = [
  Calc & ["-", 32],
  Calc & ["*", 5],
  Calc & ["/", 9],
  Calc & ["+", 273.15],
];

export type Fahrenheit = Conv<"Fahrenheit", Kelvin, FahrenheitCalcs>;

export const fahrenheit: Fahrenheit = conv(
  "Fahrenheit",
  kelvin,
  ["-", 32] as const,
  ["*", 5] as const,
  ["/", 9] as const,
  ["+", 273.15] as const
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

// Planck units

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

// Units for derived quantities

// Wavenumber (1/m)
export type ReciprocalMeter = ComposedUnit<
  "ReciprocalMeter",
  Wavenumber,
  [Meter]
>;
export const reciprocalMeter: ReciprocalMeter = composedUnit(
  "ReciprocalMeter",
  wavenumber,
  [meter]
);

// Surface density (kg/m²)
export type KilogramPerSquareMeter = ComposedUnit<
  "KilogramPerSquareMeter",
  SurfaceDensity,
  [Kilogram, SquareMeter]
>;
export const kilogramPerSquareMeter: KilogramPerSquareMeter = composedUnit(
  "KilogramPerSquareMeter",
  surfaceDensity,
  [kilogram, squareMeter]
);

// Specific volume (m³/kg)
export type CubicMeterPerKilogram = ComposedUnit<
  "CubicMeterPerKilogram",
  SpecificVolume,
  [CubicMeter, Kilogram]
>;
export const cubicMeterPerKilogram: CubicMeterPerKilogram = composedUnit(
  "CubicMeterPerKilogram",
  specificVolume,
  [cubicMeter, kilogram]
);

// Current density (A/m²)
export type AmperePerSquareMeter = ComposedUnit<
  "AmperePerSquareMeter",
  CurrentDensity,
  [Ampere, SquareMeter]
>;
export const amperePerSquareMeter: AmperePerSquareMeter = composedUnit(
  "AmperePerSquareMeter",
  currentDensity,
  [ampere, squareMeter]
);

// Magnetic field strength (A/m)
export type AmperePerMeter = ComposedUnit<
  "AmperePerMeter",
  MagneticFieldStrength,
  [Ampere, Meter]
>;
export const amperePerMeter: AmperePerMeter = composedUnit(
  "AmperePerMeter",
  magneticFieldStrength,
  [ampere, meter]
);

// Amount concentration (mol/m³)
export type MolePerCubicMeter = ComposedUnit<
  "MolePerCubicMeter",
  AmountConcentration,
  [Mole, CubicMeter]
>;
export const molePerCubicMeter: MolePerCubicMeter = composedUnit(
  "MolePerCubicMeter",
  amountConcentration,
  [mole, cubicMeter]
);

// Mass concentration (kg/m³) - same dimension as Density but different name
export type KilogramPerCubicMeter = ComposedUnit<
  "KilogramPerCubicMeter",
  MassConcentration,
  [Kilogram, CubicMeter]
>;
export const kilogramPerCubicMeter: KilogramPerCubicMeter = composedUnit(
  "KilogramPerCubicMeter",
  massConcentration,
  [kilogram, cubicMeter]
);

// Luminance (cd/m²) - also known as "nit"
export type CandelaPerSquareMeter = ComposedUnit<
  "CandelaPerSquareMeter",
  Luminance,
  [Candela, SquareMeter]
>;
export const candelaPerSquareMeter: CandelaPerSquareMeter = composedUnit(
  "CandelaPerSquareMeter",
  luminance,
  [candela, squareMeter]
);
export const nit = candelaPerSquareMeter;

// Dynamic viscosity (Pa·s) - also known as "Poiseuille"
export type PascalSecond = ComposedUnit<
  "PascalSecond",
  DynamicViscosity,
  [Pascal, Second]
>;
export const pascalSecond: PascalSecond = composedUnit(
  "PascalSecond",
  dynamicViscosity,
  [pascal, second]
);
export const poiseuille = pascalSecond;

// Kinematic viscosity (m²/s)
export type SquareMeterPerSecond = ComposedUnit<
  "SquareMeterPerSecond",
  KinematicViscosity,
  [SquareMeter, Second]
>;
export const squareMeterPerSecond: SquareMeterPerSecond = composedUnit(
  "SquareMeterPerSecond",
  kinematicViscosity,
  [squareMeter, second]
);

// Moment of force / Torque (N·m)
export type NewtonMeter = ComposedUnit<
  "NewtonMeter",
  MomentOfForce,
  [Newton, Meter]
>;
export const newtonMeter: NewtonMeter = composedUnit(
  "NewtonMeter",
  momentOfForce,
  [newton, meter]
);

// Surface tension (N/m)
export type NewtonPerMeter = ComposedUnit<
  "NewtonPerMeter",
  SurfaceTension,
  [Newton, Meter]
>;
export const newtonPerMeter: NewtonPerMeter = composedUnit(
  "NewtonPerMeter",
  surfaceTension,
  [newton, meter]
);

// Heat flux density / Irradiance (W/m²)
export type WattPerSquareMeter = ComposedUnit<
  "WattPerSquareMeter",
  HeatFluxDensity,
  [Watt, SquareMeter]
>;
export const wattPerSquareMeter: WattPerSquareMeter = composedUnit(
  "WattPerSquareMeter",
  heatFluxDensity,
  [watt, squareMeter]
);

// Heat capacity / Entropy (J/K)
export type JoulePerKelvin = ComposedUnit<
  "JoulePerKelvin",
  HeatCapacity,
  [Joule, Kelvin]
>;
export const joulePerKelvin: JoulePerKelvin = composedUnit(
  "JoulePerKelvin",
  heatCapacity,
  [joule, kelvin]
);

// Specific heat capacity (J/(kg·K))
export type JoulePerKilogramKelvin = ComposedUnit<
  "JoulePerKilogramKelvin",
  SpecificHeatCapacity,
  [JoulePerKelvin, Kilogram]
>;
export const joulePerKilogramKelvin: JoulePerKilogramKelvin = composedUnit(
  "JoulePerKilogramKelvin",
  specificHeatCapacity,
  [joulePerKelvin, kilogram]
);

// Energy density (J/m³)
export type JoulePerCubicMeter = ComposedUnit<
  "JoulePerCubicMeter",
  EnergyDensity,
  [Joule, CubicMeter]
>;
export const joulePerCubicMeter: JoulePerCubicMeter = composedUnit(
  "JoulePerCubicMeter",
  energyDensity,
  [joule, cubicMeter]
);

// Electric field strength (V/m)
export type VoltPerMeter = ComposedUnit<
  "VoltPerMeter",
  ElectricFieldStrength,
  [Volt, Meter]
>;
export const voltPerMeter: VoltPerMeter = composedUnit(
  "VoltPerMeter",
  electricFieldStrength,
  [volt, meter]
);

// Electric charge density (C/m³)
export type CoulombPerCubicMeter = ComposedUnit<
  "CoulombPerCubicMeter",
  ElectricChargeDensity,
  [Coulomb, CubicMeter]
>;
export const coulombPerCubicMeter: CoulombPerCubicMeter = composedUnit(
  "CoulombPerCubicMeter",
  electricChargeDensity,
  [coulomb, cubicMeter]
);

// Surface charge density (C/m²)
export type CoulombPerSquareMeter = ComposedUnit<
  "CoulombPerSquareMeter",
  SurfaceChargeDensity,
  [Coulomb, SquareMeter]
>;
export const coulombPerSquareMeter: CoulombPerSquareMeter = composedUnit(
  "CoulombPerSquareMeter",
  surfaceChargeDensity,
  [coulomb, squareMeter]
);

// Permittivity (F/m)
export type FaradPerMeter = ComposedUnit<
  "FaradPerMeter",
  Permittivity,
  [Farad, Meter]
>;
export const faradPerMeter: FaradPerMeter = composedUnit(
  "FaradPerMeter",
  permittivity,
  [farad, meter]
);

// Permeability (H/m)
export type HenryPerMeter = ComposedUnit<
  "HenryPerMeter",
  Permeability,
  [Henry, Meter]
>;
export const henryPerMeter: HenryPerMeter = composedUnit(
  "HenryPerMeter",
  permeability,
  [henry, meter]
);

// Molar energy (J/mol)
export type JoulePerMole = ComposedUnit<
  "JoulePerMole",
  MolarEnergy,
  [Joule, Mole]
>;
export const joulePerMole: JoulePerMole = composedUnit(
  "JoulePerMole",
  molarEnergy,
  [joule, mole]
);

// Exposure (C/kg)
export type CoulombPerKilogram = ComposedUnit<
  "CoulombPerKilogram",
  Exposure,
  [Coulomb, Kilogram]
>;
export const coulombPerKilogram: CoulombPerKilogram = composedUnit(
  "CoulombPerKilogram",
  exposure,
  [coulomb, kilogram]
);

// Absorbed dose rate (Gy/s = J/(kg·s))
export type GrayPerSecond = ComposedUnit<
  "GrayPerSecond",
  AbsorbedDoseRate,
  [Gray, Second]
>;
export const grayPerSecond: GrayPerSecond = composedUnit(
  "GrayPerSecond",
  absorbedDoseRate,
  [gray, second]
);

// Radiant intensity (W/sr)
export type WattPerSteradian = ComposedUnit<
  "WattPerSteradian",
  RadiantIntensity,
  [Watt, Steradian]
>;
export const wattPerSteradian: WattPerSteradian = composedUnit(
  "WattPerSteradian",
  radiantIntensity,
  [watt, steradian]
);

// Radiance (W/(sr·m²))
export type WattPerSteradianSquareMeter = ComposedUnit<
  "WattPerSteradianSquareMeter",
  Radiance,
  [WattPerSteradian, SquareMeter]
>;
export const wattPerSteradianSquareMeter: WattPerSteradianSquareMeter =
  composedUnit("WattPerSteradianSquareMeter", radiance, [
    wattPerSteradian,
    squareMeter,
  ]);

// Catalytic activity concentration (kat/m³)
export type KatalPerCubicMeter = ComposedUnit<
  "KatalPerCubicMeter",
  CatalyticActivityConcentration,
  [Katal, CubicMeter]
>;
export const katalPerCubicMeter: KatalPerCubicMeter = composedUnit(
  "KatalPerCubicMeter",
  catalyticActivityConcentration,
  [katal, cubicMeter]
);

// Additional mechanics units

// Angular velocity (rad/s)
export type RadianPerSecond = ComposedUnit<
  "RadianPerSecond",
  AngularVelocity,
  [Radian, Second]
>;
export const radianPerSecond: RadianPerSecond = composedUnit(
  "RadianPerSecond",
  angularVelocity,
  [radian, second]
);

// Angular acceleration (rad/s²)
export type RadianPerSecondSquared = ComposedUnit<
  "RadianPerSecondSquared",
  AngularAcceleration,
  [RadianPerSecond, Second]
>;
export const radianPerSecondSquared: RadianPerSecondSquared = composedUnit(
  "RadianPerSecondSquared",
  angularAcceleration,
  [radianPerSecond, second]
);

// Momentum (kg·m/s)
export type KilogramMeterPerSecond = ComposedUnit<
  "KilogramMeterPerSecond",
  Momentum,
  [Kilogram, MeterPerSecond]
>;
export const kilogramMeterPerSecond: KilogramMeterPerSecond = composedUnit(
  "KilogramMeterPerSecond",
  momentum,
  [kilogram, meterPerSecond]
);

// Impulse (N·s)
export type NewtonSecond = ComposedUnit<
  "NewtonSecond",
  Impulse,
  [Newton, Second]
>;
export const newtonSecond: NewtonSecond = composedUnit(
  "NewtonSecond",
  impulse,
  [newton, second]
);

// Angular momentum (kg·m²/s = N·m·s)
export type NewtonMeterSecond = ComposedUnit<
  "NewtonMeterSecond",
  AngularMomentum,
  [NewtonMeter, Second]
>;
export const newtonMeterSecond: NewtonMeterSecond = composedUnit(
  "NewtonMeterSecond",
  angularMomentum,
  [newtonMeter, second]
);

// Jerk (m/s³)
export type MeterPerSecondCubed = ComposedUnit<
  "MeterPerSecondCubed",
  Jerk,
  [MeterPerSecondSquare, Second]
>;
export const meterPerSecondCubed: MeterPerSecondCubed = composedUnit(
  "MeterPerSecondCubed",
  jerk,
  [meterPerSecondSquare, second]
);

// Action (J·s) - Planck constant has this dimension
export type JouleSecond = ComposedUnit<"JouleSecond", Action, [Joule, Second]>;
export const jouleSecond: JouleSecond = composedUnit("JouleSecond", action, [
  joule,
  second,
]);

// Planck constant
export type PlanckConstant = ConversionUnit<
  "PlanckConstant",
  Equal<6.62607015e-34, JouleSecond>
>;
export const planckConstant: PlanckConstant = conversionUnit(
  "PlanckConstant",
  equal(6.62607015e-34, jouleSecond)
);

// Additional thermodynamics units

// Thermal conductivity (W/(m²·K) / m = W/(m·K))
export type WattPerMeterKelvin = ComposedUnit<
  "WattPerMeterKelvin",
  ThermalConductivity,
  [WattPerSquareMeter, Kelvin]
>;
export const wattPerMeterKelvin: WattPerMeterKelvin = composedUnit(
  "WattPerMeterKelvin",
  thermalConductivity,
  [wattPerSquareMeter, kelvin]
);

// Heat transfer coefficient (W/(m²·K))
export type WattPerSquareMeterKelvin = ComposedUnit<
  "WattPerSquareMeterKelvin",
  HeatTransferCoefficient,
  [WattPerSquareMeter, Kelvin]
>;
export const wattPerSquareMeterKelvin: WattPerSquareMeterKelvin = composedUnit(
  "WattPerSquareMeterKelvin",
  heatTransferCoefficient,
  [wattPerSquareMeter, kelvin]
);

// Molar mass (kg/mol)
export type KilogramPerMole = ComposedUnit<
  "KilogramPerMole",
  MolarMass,
  [Kilogram, Mole]
>;
export const kilogramPerMole: KilogramPerMole = composedUnit(
  "KilogramPerMole",
  molarMass,
  [kilogram, mole]
);

// Molar volume (m³/mol)
export type CubicMeterPerMole = ComposedUnit<
  "CubicMeterPerMole",
  MolarVolume,
  [CubicMeter, Mole]
>;
export const cubicMeterPerMole: CubicMeterPerMole = composedUnit(
  "CubicMeterPerMole",
  molarVolume,
  [cubicMeter, mole]
);

// Additional electromagnetic units

// Electrical resistivity (Ω·m)
export type OhmMeter = ComposedUnit<
  "OhmMeter",
  ElectricalResistivity,
  [Ohm, Meter]
>;
export const ohmMeter: OhmMeter = composedUnit(
  "OhmMeter",
  electricalResistivity,
  [ohm, meter]
);

// Electrical conductivity (S/m)
export type SiemensPerMeter = ComposedUnit<
  "SiemensPerMeter",
  ElectricalConductivity,
  [Siemens, Meter]
>;
export const siemensPerMeter: SiemensPerMeter = composedUnit(
  "SiemensPerMeter",
  electricalConductivity,
  [siemens, meter]
);

// Flow units

// Volumetric flow rate (m³/s)
export type CubicMeterPerSecond = ComposedUnit<
  "CubicMeterPerSecond",
  VolumetricFlowRate,
  [CubicMeter, Second]
>;
export const cubicMeterPerSecond: CubicMeterPerSecond = composedUnit(
  "CubicMeterPerSecond",
  volumetricFlowRate,
  [cubicMeter, second]
);

// Mass flow rate (kg/s)
export type KilogramPerSecond = ComposedUnit<
  "KilogramPerSecond",
  MassFlowRate,
  [Kilogram, Second]
>;
export const kilogramPerSecond: KilogramPerSecond = composedUnit(
  "KilogramPerSecond",
  massFlowRate,
  [kilogram, second]
);

// Spectral units

// Spectral power (W/Hz)
export type WattPerHertz = ComposedUnit<
  "WattPerHertz",
  SpectralPower,
  [Watt, Hertz]
>;
export const wattPerHertz: WattPerHertz = composedUnit(
  "WattPerHertz",
  spectralPower,
  [watt, hertz]
);

// Spectral flux density (W/(m²·Hz)) - Jansky is a common unit
export type WattPerSquareMeterHertz = ComposedUnit<
  "WattPerSquareMeterHertz",
  SpectralFluxDensity,
  [WattPerSquareMeter, Hertz]
>;
export const wattPerSquareMeterHertz: WattPerSquareMeterHertz = composedUnit(
  "WattPerSquareMeterHertz",
  spectralFluxDensity,
  [wattPerSquareMeter, hertz]
);

// Jansky (10^-26 W/(m²·Hz)) - common in radio astronomy
export type Jansky = ConversionUnit<
  "Jansky",
  Equal<1e-26, WattPerSquareMeterHertz>
>;
export const jansky: Jansky = conversionUnit(
  "Jansky",
  equal(1e-26, wattPerSquareMeterHertz)
);
