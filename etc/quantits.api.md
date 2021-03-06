## API Report File for "quantits"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

// @public (undocumented)
export const A: Ampere;

// @public (undocumented)
export type AbsorbedDose = Quantity<"AbsorbedDose", Divide<Energy, Mass>>;

// @public (undocumented)
export const absorbedDose: AbsorbedDose;

// @public (undocumented)
export type AbsorbedDoseRate = Quantity<"AbsorbedDoseRate", Divide<AbsorbedDose, Time>>;

// @public (undocumented)
export const absorbedDoseRate: AbsorbedDoseRate;

// @public (undocumented)
export type Acceleration = Quantity<"Acceleration", Divide<Speed, Time>>;

// @public (undocumented)
export const acceleration: Acceleration;

// @public (undocumented)
export type AmountConcentration = Quantity<"AmountConcentration", Divide<AmountOfSubstance, Volume>>;

// @public (undocumented)
export const amountConcentration: AmountConcentration;

// @public (undocumented)
export type AmountOfSubstance = Dimension<"AmountOfSubstance">;

// @public (undocumented)
export const amountOfSubstance: AmountOfSubstance;

// @public (undocumented)
export type Ampere = Unit<"Ampere", ElectricCurrent>;

// @public (undocumented)
export const ampere: Ampere;

// @public (undocumented)
export const amperes: Ampere;

// @public (undocumented)
export type AnyComposedUnit = ComposedUnit<string, AnyQuantity, any>;

// @public (undocumented)
export type AnyComposition = {
    d1: AnyDimension;
    op: Operation;
    d2: AnyDimension | number;
};

// @public (undocumented)
export type AnyConversion = {
    u: AnyUnit;
    op: Operation;
    n: number;
};

// @public (undocumented)
export type AnyConversionUnit = ConversionUnit<string, AnyConversion>;

// @public (undocumented)
export type AnyDimension = AnySimpleDimension | AnyQuantity;

// @public (undocumented)
export type AnyMeasurement = Measurement<number, AnyUnit>;

// @public (undocumented)
export type AnyQuantity = Quantity<string, AnyComposition>;

// @public (undocumented)
export type AnySimpleDimension = Dimension<string>;

// @public (undocumented)
export type AnySimpleUnit = Unit<string, AnySimpleDimension>;

// @public (undocumented)
export type AnyUnit = AnySimpleUnit | AnyComposedUnit | AnyConversionUnit;

// @public (undocumented)
export type Area = Quantity<"Area", Pow<Length, 2>>;

// @public (undocumented)
export const area: Area;

// @public (undocumented)
export const b: Bit;

// @public (undocumented)
export type Bandwidth = Quantity<"Bandwidth", Divide<Information, Time>>;

// @public (undocumented)
export const bandwidth: Bandwidth;

// Warning: (ae-forgotten-export) The symbol "BasicConv" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export function basicConv<U extends AnyUnit, Prefix extends string, N extends number>(u: U, prefix: Prefix, n: N): BasicConv<U, Prefix, N>;

// @public (undocumented)
export type Becquerel = Hertz;

// @public (undocumented)
export const becquerel: Hertz;

// @public (undocumented)
export type Bit = Unit<"Bit", Information>;

// @public (undocumented)
export const bit: Bit;

// @public (undocumented)
export type Bitrate = ComposedUnit<"Bitrate", Bandwidth, [Bit, Second]>;

// @public (undocumented)
export const bits: Bit;

// @public (undocumented)
export type BPS = Bitrate;

// @public (undocumented)
export const bps: Bitrate;

// @public (undocumented)
export type Byte = ConversionUnit<"Byte", Equal<8, Bit>>;

// @public (undocumented)
export type Candela = Unit<"Candela", LuminousIntensity>;

// @public (undocumented)
export const candela: Candela;

// @public (undocumented)
export const candelas: Candela;

// @public (undocumented)
export type Capacitance = Quantity<"Capacitance", Divide<ElectricCharge, ElectricPotentialDifference>>;

// @public (undocumented)
export const capacitance: Capacitance;

// @public (undocumented)
export type CatalyticActivity = Quantity<"CatalyticActivity", Divide<AmountOfSubstance, Time>>;

// @public (undocumented)
export const catalyticActivity: CatalyticActivity;

// @public (undocumented)
export type CatalyticActivityConcentration = Quantity<"CatalyticActivityConcentration", Divide<CatalyticActivity, Volume>>;

// @public (undocumented)
export const catalyticActivityConcentration: CatalyticActivityConcentration;

// @public (undocumented)
export const cd: Candela;

// @public (undocumented)
export type Celsius = ConversionUnit<"Celsius", Sum<Kelvin, 273.15>>;

// @public (undocumented)
export const celsius: Celsius;

// @public (undocumented)
export type Centi<U extends AnyUnit> = BasicConv<U, "Centi", 0.01>;

// @public (undocumented)
export function centi<U extends AnyUnit>(u: U): Centi<U>;

// @public (undocumented)
export type Centimeter = Centi<Meter>;

// @public (undocumented)
export const centimeter: Centimeter;

// @public (undocumented)
export const centimeters: Centimeter;

// @public (undocumented)
export type ComposedUnit<Name extends string, CD extends AnyQuantity, US extends AnyUnit[]> = {
    type: "ComposedUnit";
    name: Name;
    dimension: CD;
    composedUnits: US;
};

// @public (undocumented)
export function composedUnit<Name extends string, CD extends AnyQuantity, US extends AnyUnit[]>(name: Name, dimension: CD, composedUnits: US): ComposedUnit<Name, CD, US>;

// @public (undocumented)
export type Composition<D1 extends AnyDimension, Op extends Operation, D2 extends AnyDimension | number> = {
    d1: D1;
    op: Op;
    d2: D2;
};

// @public (undocumented)
export const concentraction: AmountConcentration;

// @public (undocumented)
export type Concentration = AmountConcentration;

// @public (undocumented)
export type Conversion<U extends AnyUnit, Op extends Operation, N extends number> = {
    u: U;
    op: Op;
    n: N;
};

// @public (undocumented)
export class ConversionError extends Error {
    constructor(u1: AnyUnit, u2: AnyUnit);
}

// @public (undocumented)
export type ConversionUnit<Name extends string, C extends AnyConversion> = {
    type: "ConversionUnit";
    name: Name;
    conversion: C;
    dimension: null;
};

// @public (undocumented)
export function conversionUnit<Name extends string, C extends AnyConversion>(name: Name, conversion: C): ConversionUnit<Name, C>;

// Warning: (ae-forgotten-export) The symbol "Operations" needs to be exported by the entry point index.d.ts
// Warning: (ae-forgotten-export) The symbol "CalculateConversion" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export function convert<U1 extends AnyUnit | AnyMeasurement, U2 extends AnyUnit>(u1: U1, u2: U2, ops?: Operations, initialValue?: number): CalculateConversion<U1, U2>;

// @public (undocumented)
export type Coulomb = ComposedUnit<"Coulomb", ElectricCharge, [Second, Ampere]>;

// @public (undocumented)
export const coulomb: Coulomb;

// @public (undocumented)
export type CubicMeter = ComposedUnit<"CubicMeter", Volume, [Meter]>;

// @public (undocumented)
export const cubicMeter: CubicMeter;

// @public (undocumented)
export type CurrentDensity = Quantity<"CurrentDensity", Divide<ElectricCurrent, Area>>;

// @public (undocumented)
export const currentDensity: CurrentDensity;

// @public (undocumented)
export type Deci<U extends AnyUnit> = BasicConv<U, "Deci", 0.1>;

// @public (undocumented)
export function deci<U extends AnyUnit>(u: U): Deci<U>;

// @public (undocumented)
export type Density = Quantity<"Density", Divide<Mass, Volume>>;

// @public (undocumented)
export const density: Density;

// @public (undocumented)
export type DigitalDimension = Information;

// @public (undocumented)
export type DigitalUnit = Bit | Trit;

// @public (undocumented)
export type Dimension<Name extends string> = {
    type: "Dimension";
    name: Name;
};

// @public (undocumented)
export function dimension<Name extends string>(name: Name): Dimension<Name>;

// @public (undocumented)
export type Divide<Q1 extends AnyDimension, Q2 extends AnyDimension> = Composition<Q1, "/", Q2>;

// @public (undocumented)
export function divide<D1 extends AnyDimension, D2 extends AnyDimension>(d1: D1, d2: D2): Divide<D1, D2>;

// @public (undocumented)
export type DynamicViscosity = Quantity<"CatalyticActivity", Multiply<Stress, Time>>;

// @public (undocumented)
export const dynamicViscosity: DynamicViscosity;

// @public (undocumented)
export type ElectricCharge = Quantity<"ElectricCharge", Multiply<ElectricCurrent, Time>>;

// @public (undocumented)
export const electricCharge: ElectricCharge;

// @public (undocumented)
export type ElectricChargeDensity = Quantity<"ElectricChargeDensity", Divide<ElectricCharge, Volume>>;

// @public (undocumented)
export const electricChargeDensity: ElectricChargeDensity;

// @public (undocumented)
export type ElectricConductance = Quantity<"ElectricConductance", Divide<ElectricCurrent, ElectricPotentialDifference>>;

// @public (undocumented)
export const electricConductance: ElectricConductance;

// @public (undocumented)
export type ElectricCurrent = Dimension<"ElectricCurrent">;

// @public (undocumented)
export const electricCurrent: ElectricCurrent;

// @public (undocumented)
export type ElectricDisplacement = SurfaceChargeDensity;

// @public (undocumented)
export const electricDisplacement: SurfaceChargeDensity;

// @public (undocumented)
export type ElectricFieldStrength = Quantity<"ElectricFieldStrength", Divide<ElectricPotentialDifference, Length>>;

// @public (undocumented)
export const electricFieldStrength: ElectricFieldStrength;

// @public (undocumented)
export type ElectricFluxDensity = SurfaceChargeDensity;

// @public (undocumented)
export const electricFluxDensity: SurfaceChargeDensity;

// @public (undocumented)
export type ElectricPotentialDifference = Quantity<"ElectricPotentialDifference", Divide<Power, ElectricCurrent>>;

// @public (undocumented)
export const electricPotentialDifference: ElectricPotentialDifference;

// @public (undocumented)
export type ElectricResistance = Quantity<"ElectricResistance", Divide<ElectricPotentialDifference, ElectricCurrent>>;

// @public (undocumented)
export const electricResistance: ElectricResistance;

// @public (undocumented)
export type Energy = Quantity<"Energy", Multiply<Force, Length>>;

// @public (undocumented)
export const energy: Energy;

// @public (undocumented)
export type EnergyDensity = Quantity<"EnergyDensity", Divide<Energy, Volume>>;

// @public (undocumented)
export const energyDensity: EnergyDensity;

// @public (undocumented)
export type Entropy = HeatCapacity;

// @public (undocumented)
export const entropy: HeatCapacity;

// @public (undocumented)
export type Equal<N extends number, U extends AnyUnit> = Conversion<U, "*", N>;

// @public (undocumented)
export function equal<N extends number, U extends AnyUnit>(n: N, u: U): Equal<N, U>;

// @public (undocumented)
export type Exa<U extends AnyUnit> = BasicConv<U, "Exa", 1000000000000000000>;

// @public (undocumented)
export function exa<U extends AnyUnit>(u: U): Exa<U>;

// @public (undocumented)
export type Exabyte = Exa<Byte>;

// @public (undocumented)
export const exabyte: Exabyte;

// @public (undocumented)
export type Exatryte = Exa<Tryte>;

// @public (undocumented)
export const exatryte: Exatryte;

// @public (undocumented)
export type Exbi<U extends AnyUnit> = BasicConv<U, "Exbi", 1152921504606847000>;

// @public (undocumented)
export function exbi<U extends AnyUnit>(u: U): Exbi<U>;

// @public (undocumented)
export type Exbibyte = Exbi<Byte>;

// @public (undocumented)
export const exbibyte: Exbibyte;

// @public (undocumented)
export type Exbitryte = Exbi<Tryte>;

// @public (undocumented)
export const exbitryte: Exbitryte;

// @public (undocumented)
export type Exposure = Quantity<"Exposure", Divide<ElectricCharge, Mass>>;

// @public (undocumented)
export const exposure: Exposure;

// @public (undocumented)
export type Fahrenheit = ConversionUnit<"Fahrenheit", Sum<ConversionUnit<"_", Equal<1.8, Kelvin>>, 32>>;

// @public (undocumented)
export type Farad = ComposedUnit<"Farad", Capacitance, [Coulomb, Volt]>;

// @public (undocumented)
export const farad: Farad;

// @public (undocumented)
export const farenheit: ConversionUnit<"Fahrenheit", Sum<ConversionUnit<"_", Equal<1.8, Celsius>>, 32>>;

// @public (undocumented)
export type Femto<U extends AnyUnit> = BasicConv<U, "Femto", 0.000000000000001>;

// @public (undocumented)
export function femto<U extends AnyUnit>(u: U): Femto<U>;

// @public (undocumented)
export type Force = Quantity<"Force", Multiply<Acceleration, Mass>>;

// @public (undocumented)
export const force: Force;

// @public (undocumented)
export type Frequency = Quantity<"Frequency", Pow<Time, -1>>;

// @public (undocumented)
export const frequency: Frequency;

// @public (undocumented)
export type Gibi<U extends AnyUnit> = BasicConv<U, "Gibi", 1073741824>;

// @public (undocumented)
export function gibi<U extends AnyUnit>(u: U): Gibi<U>;

// @public (undocumented)
export type Gibibyte = Gibi<Byte>;

// @public (undocumented)
export const gibibyte: Gibibyte;

// @public (undocumented)
export type Gibitryte = Gibi<Tryte>;

// @public (undocumented)
export const gibitryte: Gibitryte;

// @public (undocumented)
export type Giga<U extends AnyUnit> = BasicConv<U, "Giga", 1000000000>;

// @public (undocumented)
export function giga<U extends AnyUnit>(u: U): Giga<U>;

// @public (undocumented)
export type Gigabyte = Giga<Byte>;

// @public (undocumented)
export const gigabyte: Gigabyte;

// @public (undocumented)
export type Gigatryte = Giga<Tryte>;

// @public (undocumented)
export const gigatryte: Gigatryte;

// @public (undocumented)
export type Gray = ComposedUnit<"Gray", AbsorbedDose, [Joule, Kilogram]>;

// @public (undocumented)
export const gray: Gray;

// @public (undocumented)
export type HeatCapacity = Quantity<"HeatCapacity", Divide<Energy, Temperature>>;

// @public (undocumented)
export const heatCapacity: HeatCapacity;

// @public (undocumented)
export type HeatFluxDensity = Quantity<"HeatFluxDensity", Divide<Power, Area>>;

// @public (undocumented)
export const heatFluxDensity: HeatFluxDensity;

// @public (undocumented)
export type Henry = ComposedUnit<"Henry", Inductance, [Weber, Ampere]>;

// @public (undocumented)
export const henry: Henry;

// @public (undocumented)
export type Hertz = ComposedUnit<"Hertz", Frequency, [Second]>;

// @public (undocumented)
export const hertz: Hertz;

// @public (undocumented)
export type Hour = ConversionUnit<"Hour", Equal<3600, Second>>;

// @public (undocumented)
export const hour: Hour;

// @public (undocumented)
export const hours: Hour;

// @public (undocumented)
export type HypercubicMeter = ComposedUnit<"HypercubicMeter", Hypervolume, [
Meter
]>;

// @public (undocumented)
export const hypercubicMeter: HypercubicMeter;

// @public (undocumented)
export type Hypervolume = Quantity<"Hypervolume", Pow<Length, 4>>;

// @public (undocumented)
export const hypervolume: Hypervolume;

// @public (undocumented)
export type I = ElectricCurrent;

// @public (undocumented)
export type Illuminance = Quantity<"MagneticFluxDensity", Divide<LuminousFlux, Area>>;

// @public (undocumented)
export const illuminance: Illuminance;

// @public (undocumented)
export type Inductance = Quantity<"MagneticFluxDensity", Divide<MagneticFlux, ElectricCurrent>>;

// @public (undocumented)
export const inductance: Inductance;

// @public (undocumented)
export type Information = Dimension<"Information">;

// @public (undocumented)
export const information: Information;

// @public (undocumented)
export type Irradiance = HeatFluxDensity;

// @public (undocumented)
export const irradiance: HeatFluxDensity;

// @public (undocumented)
export type J = LuminousIntensity;

// @public (undocumented)
export type Joule = ComposedUnit<"Joule", Energy, [Newton, Meter]>;

// @public (undocumented)
export const joule: Joule;

// @public (undocumented)
export const K: Kelvin;

// @public (undocumented)
export type Katal = ComposedUnit<"Katal", CatalyticActivity, [Mole, Second]>;

// @public (undocumented)
export const katal: Katal;

// @public (undocumented)
export type Kelvin = Unit<"Kelvin", Temperature>;

// @public (undocumented)
export const kelvin: Kelvin;

// @public (undocumented)
export const kelvins: Kelvin;

// @public (undocumented)
export type Kerma = AbsorbedDose;

// @public (undocumented)
export const kerma: AbsorbedDose;

// @public (undocumented)
export const kg: Kilogram;

// @public (undocumented)
export type Kibi<U extends AnyUnit> = BasicConv<U, "Kibi", 1024>;

// @public (undocumented)
export function kibi<U extends AnyUnit>(u: U): Kibi<U>;

// @public (undocumented)
export type Kibibyte = Kibi<Byte>;

// @public (undocumented)
export const kibibyte: Kibibyte;

// @public (undocumented)
export type Kibitryte = Kibi<Tryte>;

// @public (undocumented)
export const kibitryte: Kibitryte;

// @public (undocumented)
export type Kilo<U extends AnyUnit> = BasicConv<U, "Kilo", 1000>;

// @public (undocumented)
export function kilo<U extends AnyUnit>(u: U): Kilo<U>;

// @public (undocumented)
export type Kilobyte = Kilo<Byte>;

// @public (undocumented)
export const kilobyte: Kilobyte;

// @public (undocumented)
export type Kilogram = Unit<"Kilogram", Mass>;

// @public (undocumented)
export const kilogram: Kilogram;

// @public (undocumented)
export const kilograms: Kilogram;

// @public (undocumented)
export type Kilometer = Kilo<Meter>;

// @public (undocumented)
export const kilometer: Kilometer;

// @public (undocumented)
export type KilometerPerHour = ComposedUnit<"KilometerPerHour", Speed, [
Kilometer,
Hour
]>;

// @public (undocumented)
export const kilometerPerHour: KilometerPerHour;

// @public (undocumented)
export type KilometerPerSecond = ComposedUnit<"KilometerPerSecond", Speed, [
Kilometer,
Second
]>;

// @public (undocumented)
export const kilometerPerSecond: KilometerPerSecond;

// @public (undocumented)
export const kilometers: Kilometer;

// @public (undocumented)
export type Kilotryte = Kilo<Tryte>;

// @public (undocumented)
export const kilotryte: Kilotryte;

// @public (undocumented)
export type KinematicViscosity = Quantity<"KinematicViscosity", Divide<Area, Time>>;

// @public (undocumented)
export const kinematicViscosity: KinematicViscosity;

// @public (undocumented)
export type L = Length;

// @public (undocumented)
export type Length = Dimension<"Length">;

// @public (undocumented)
const length_2: Length;
export { length_2 as length }

// @public (undocumented)
export type Liter = ConversionUnit<"Liter", Equal<0.001, CubicMeter>>;

// @public (undocumented)
export const liter: Liter;

// @public (undocumented)
export type Lumen = ComposedUnit<"Lumen", LuminousFlux, [Candela, Steradian]>;

// @public (undocumented)
export const lumen: Lumen;

// @public (undocumented)
export type Luminance = Quantity<"Luminance", Divide<LuminousIntensity, Area>>;

// @public (undocumented)
export const luminance: Luminance;

// @public (undocumented)
export type LuminousFlux = Quantity<"LuminousFlux", Multiply<LuminousIntensity, SolidAngle>>;

// @public (undocumented)
export const luminousFlux: LuminousFlux;

// @public (undocumented)
export type LuminousIntensity = Dimension<"LuminousIntensity">;

// @public (undocumented)
export const luminousIntensity: LuminousIntensity;

// @public (undocumented)
export type Lux = ComposedUnit<"Lux", Illuminance, [Lumen, SquareMeter]>;

// @public (undocumented)
export const lux: Lux;

// @public (undocumented)
export type M = Mass;

// @public (undocumented)
export const m: Meter;

// @public (undocumented)
export type MagneticFieldStrength = Quantity<"MagneticFieldStrength", Divide<ElectricCurrent, Length>>;

// @public (undocumented)
export const magneticFieldStrength: MagneticFieldStrength;

// @public (undocumented)
export type MagneticFlux = Quantity<"MagneticFlux", Multiply<Time, ElectricPotentialDifference>>;

// @public (undocumented)
export const magneticFlux: MagneticFlux;

// @public (undocumented)
export type MagneticFluxDensity = Quantity<"MagneticFluxDensity", Divide<MagneticFlux, Area>>;

// @public (undocumented)
export const magneticFluxDensity: MagneticFluxDensity;

// @public (undocumented)
export type Mass = Dimension<"Mass">;

// @public (undocumented)
export const mass: Mass;

// @public (undocumented)
export type MassConcentration = Quantity<"MassConcentration", Divide<Mass, Volume>>;

// @public (undocumented)
export const massConcentration: MassConcentration;

// @public (undocumented)
export type Measurement<N extends number, U extends AnyUnit> = {
    type: "Measurement";
    n: N;
    u: AnyUnit;
};

// @public (undocumented)
export function measurement<N extends number, U extends AnyUnit>(n: N, u: U): Measurement<N, U>;

// @public (undocumented)
export type Mebi<U extends AnyUnit> = BasicConv<U, "Mebi", 1048576>;

// @public (undocumented)
export function mebi<U extends AnyUnit>(u: U): Mebi<U>;

// @public (undocumented)
export type Mebibyte = Mebi<Byte>;

// @public (undocumented)
export const mebibyte: Mebibyte;

// @public (undocumented)
export type Mebitryte = Mebi<Tryte>;

// @public (undocumented)
export const mebitryte: Mebitryte;

// @public (undocumented)
export type Mega<U extends AnyUnit> = BasicConv<U, "Mega", 1000000>;

// @public (undocumented)
export function mega<U extends AnyUnit>(u: U): Mega<U>;

// @public (undocumented)
export type Megabyte = Mega<Byte>;

// @public (undocumented)
export const megabyte: Megabyte;

// @public (undocumented)
export type Megatryte = Mega<Tryte>;

// @public (undocumented)
export const megatryte: Megatryte;

// @public (undocumented)
export type Meter = Unit<"Meter", Length>;

// @public (undocumented)
export const meter: Meter;

// @public (undocumented)
export type MeterPerSecond = ComposedUnit<"MeterPerSecond", Speed, [
Meter,
Second
]>;

// @public (undocumented)
export const meterPerSecond: MeterPerSecond;

// @public (undocumented)
export type MeterPerSecondSquare = ComposedUnit<"MeterPerSecondSquare", Acceleration, [
MeterPerSecond,
Second
]>;

// @public (undocumented)
export const meterPerSecondSquare: MeterPerSecondSquare;

// @public (undocumented)
export const meters: Meter;

// @public (undocumented)
export type Micro<U extends AnyUnit> = BasicConv<U, "Micro", 0.000001>;

// @public (undocumented)
export function micro<U extends AnyUnit>(u: U): Micro<U>;

// @public (undocumented)
export type Mili<U extends AnyUnit> = BasicConv<U, "Mili", 0.001>;

// @public (undocumented)
export function mili<U extends AnyUnit>(u: U): Mili<U>;

// @public (undocumented)
export type Minute = Sixty<Second, "Minute">;

// @public (undocumented)
export const minute: Minute;

// @public (undocumented)
export const minutes: Minute;

// @public (undocumented)
export const mol: Mole;

// @public (undocumented)
export type MolarEnergy = Quantity<"MolarEnergy", Divide<Energy, AmountOfSubstance>>;

// @public (undocumented)
export const molarEnergy: MolarEnergy;

// @public (undocumented)
export type MolarHeatCapacity = MolarEnergy;

// @public (undocumented)
export const molarHeatCapacity: MolarEnergy;

// @public (undocumented)
export type Mole = Unit<"Mole", AmountOfSubstance>;

// @public (undocumented)
export const mole: Mole;

// @public (undocumented)
export const moles: Mole;

// @public (undocumented)
export type Moment = MomentOfForce;

// @public (undocumented)
export const moment: MomentOfForce;

// @public (undocumented)
export type MomentOfForce = Quantity<"MomentOfForce", Multiply<Force, Length>>;

// @public (undocumented)
export const momentOfForce: MomentOfForce;

// @public (undocumented)
export type Multiply<Q1 extends AnyDimension, Q2 extends AnyDimension> = Composition<Q1, "*", Q2>;

// @public (undocumented)
export function multiply<D1 extends AnyDimension, D2 extends AnyDimension>(d1: D1, d2: D2): Multiply<D1, D2>;

// @public (undocumented)
export type N = AmountOfSubstance;

// @public (undocumented)
export type Nano<U extends AnyUnit> = BasicConv<U, "Nano", 0.000000001>;

// @public (undocumented)
export function nano<U extends AnyUnit>(u: U): Nano<U>;

// @public (undocumented)
export type Newton = ComposedUnit<"Newton", Force, [
MeterPerSecondSquare,
Kilogram
]>;

// @public (undocumented)
export const newton: Newton;

// @public (undocumented)
export type Ohm = ComposedUnit<"Ohm", ElectricResistance, [Volt, Ampere]>;

// @public (undocumented)
export const ohm: Ohm;

// @public (undocumented)
export type Operation = "+" | "-" | "*" | "/" | "^" | "???";

// @public (undocumented)
export type Pascal = ComposedUnit<"Pascal", Pressure, [Newton, SquareMeter]>;

// @public (undocumented)
export const pascal: Pascal;

// @public (undocumented)
export type Pebi<U extends AnyUnit> = BasicConv<U, "Pebi", 1125899906842624>;

// @public (undocumented)
export function pebi<U extends AnyUnit>(u: U): Pebi<U>;

// @public (undocumented)
export type Pebibyte = Pebi<Byte>;

// @public (undocumented)
export type Pebitryte = Pebi<Tryte>;

// @public (undocumented)
export type Permeability = Quantity<"Permeability", Divide<Inductance, Length>>;

// @public (undocumented)
export const permeability: Permeability;

// @public (undocumented)
export type Permittivity = Quantity<"Permittivity", Divide<Capacitance, Length>>;

// @public (undocumented)
export const permittivity: Permittivity;

// @public (undocumented)
export type Peta<U extends AnyUnit> = BasicConv<U, "Peta", 1000000000000000>;

// @public (undocumented)
export function peta<U extends AnyUnit>(u: U): Peta<U>;

// @public (undocumented)
export type Petabyte = Peta<Byte>;

// @public (undocumented)
export const petabyte: Petabyte;

// @public (undocumented)
export type Petatryte = Peta<Tryte>;

// @public (undocumented)
export const petatryte: Petatryte;

// @public (undocumented)
export const petbibyte: Pebibyte;

// @public (undocumented)
export const petbitryte: Pebitryte;

// @public (undocumented)
export type PhysicsDimension = L | M | T | I | ?? | N | J;

// @public (undocumented)
export type PhysicsUnit = Second | Meter | Kilogram | Ampere | Kelvin | Mole | Candela;

// @public (undocumented)
export type Pico<U extends AnyUnit> = BasicConv<U, "Pico", 0.000000000001>;

// @public (undocumented)
export function pico<U extends AnyUnit>(u: U): Pico<U>;

// @public (undocumented)
export type PlaneAngle = Dimension<"PlaneAngle">;

// @public (undocumented)
export const planeAngle: Dimension<"PlaneAngle">;

// @public (undocumented)
export type Pow<D1 extends AnyDimension, Exp extends number> = Composition<D1, "^", Exp>;

// @public (undocumented)
export function pow<D1 extends AnyDimension, Exp extends number>(d1: D1, exp: Exp): Pow<D1, Exp>;

// @public (undocumented)
export type Power = Quantity<"Power", Divide<Energy, Time>>;

// @public (undocumented)
export const power: Power;

// @public (undocumented)
export type Pressure = Quantity<"Pressure", Divide<Force, Area>>;

// @public (undocumented)
export const pressure: Pressure;

// @public (undocumented)
export type Quantity<Name extends string, C extends AnyComposition> = {
    type: "Quantity";
    name: Name;
    composition: C;
};

// @public (undocumented)
export function quantity<Name extends string, C extends AnyComposition>(name: Name, composition: C): Quantity<Name, C>;

// @public (undocumented)
export type Rad = Radian;

// @public (undocumented)
export const radi: Radian;

// @public (undocumented)
export type Radian = Unit<"Radian", PlaneAngle>;

// @public (undocumented)
export const radian: Radian;

// @public (undocumented)
export type Radiance = Quantity<"Radiance", Divide<RadiantIntensity, Area>>;

// @public (undocumented)
export const radiance: Radiance;

// @public (undocumented)
export type RadiantIntensity = Quantity<"RadiantIntensity", Divide<Power, SolidAngle>>;

// @public (undocumented)
export const radiantIntensity: RadiantIntensity;

// @public (undocumented)
export type RefractiveIndex = Dimension<"RefractiveIndex">;

// @public (undocumented)
export const refractiveIndex: Dimension<"RefractiveIndex">;

// @public (undocumented)
export type RelativePermeability = Dimension<"RelativePermeability">;

// @public (undocumented)
export const relativePermeability: Dimension<"RelativePermeability">;

// @public (undocumented)
export const s: Second;

// @public (undocumented)
export type Second = Unit<"Second", Time>;

// @public (undocumented)
export const second: Second;

// @public (undocumented)
export const seconds: Second;

// @public (undocumented)
export type Siemens = ComposedUnit<"Siemens", ElectricConductance, [
Ampere,
Volt
]>;

// @public (undocumented)
export const siemens: Siemens;

// @public (undocumented)
export type Sievert = Gray;

// @public (undocumented)
export const sievert: Gray;

// @public (undocumented)
export type SimpleDimension = PhysicsDimension | DigitalDimension;

// @public (undocumented)
export type SimpleUnit = PhysicsUnit | DigitalUnit;

// @public (undocumented)
export type Sixty<U extends AnyUnit, Name extends string> = BasicConv<U, Name, 60>;

// @public (undocumented)
export function sixty<U extends AnyUnit, Name extends string>(u: U, name: Name): Sixty<U, Name>;

// @public (undocumented)
export type SolidAngle = Dimension<"SolidAngle">;

// @public (undocumented)
export const solidAngle: Dimension<"SolidAngle">;

// @public (undocumented)
export type SpecificEnergy = AbsorbedDose;

// @public (undocumented)
export const specificEnergy: AbsorbedDose;

// @public (undocumented)
export type SpecificEntropy = SpecificHeatCapacity;

// @public (undocumented)
export const SpecificEntropy: SpecificHeatCapacity;

// @public (undocumented)
export type SpecificHeatCapacity = Quantity<"SpecificHeatCapacity", Divide<HeatCapacity, Mass>>;

// @public (undocumented)
export const specificHeatCapacity: SpecificHeatCapacity;

// @public (undocumented)
export type SpecificVolume = Quantity<"SpecificVolume", Divide<Volume, Mass>>;

// @public (undocumented)
export const specificVolume: SpecificVolume;

// @public (undocumented)
export type Speed = Quantity<"Speed", Divide<Length, Time>>;

// @public (undocumented)
export const speed: Speed;

// @public (undocumented)
export type SquareMeter = ComposedUnit<"SquareMeter", Area, [Meter]>;

// @public (undocumented)
export const squareMeter: SquareMeter;

// @public (undocumented)
export type Steradian = Unit<"Steradian", SolidAngle>;

// @public (undocumented)
export const steradian: Steradian;

// @public (undocumented)
export type Stress = Pressure;

// @public (undocumented)
export type Subtract<U extends AnyUnit, N extends number> = Conversion<U, "-", N>;

// @public (undocumented)
export function subtract<U extends AnyUnit, N extends number>(u: U, n: N): Subtract<U, N>;

// @public (undocumented)
export type Sum<U extends AnyUnit, N extends number> = Conversion<U, "+", N>;

// @public (undocumented)
export function sum<U extends AnyUnit, N extends number>(u: U, n: N): Sum<U, N>;

// @public (undocumented)
export type SurfaceChargeDensity = Quantity<"SurfaceChargeDensity", Divide<ElectricCharge, Area>>;

// @public (undocumented)
export const surfaceChargeDensity: SurfaceChargeDensity;

// @public (undocumented)
export type SurfaceDensity = Quantity<"SurfaceDensity", Divide<Mass, Area>>;

// @public (undocumented)
export const surfaceDensity: SurfaceDensity;

// @public (undocumented)
export type SurfaceTension = Quantity<"SurfaceTension", Divide<Force, Length>>;

// @public (undocumented)
export const surfaceTension: SurfaceTension;

// @public (undocumented)
export type T = Time;

// @public (undocumented)
export type Tebi<U extends AnyUnit> = BasicConv<U, "Tebi", 1099511627776>;

// @public (undocumented)
export function tebi<U extends AnyUnit>(u: U): Tebi<U>;

// @public (undocumented)
export type Tebibyte = Tebi<Byte>;

// @public (undocumented)
export const tebibyte: Tebibyte;

// @public (undocumented)
export type Tebitryte = Tebi<Tryte>;

// @public (undocumented)
export const tebitryte: Tebitryte;

// @public (undocumented)
export type Temperature = Dimension<"Temperature">;

// @public (undocumented)
export const temperature: Temperature;

// @public (undocumented)
export type Tera<U extends AnyUnit> = BasicConv<U, "Tera", 1000000000000>;

// @public (undocumented)
export function tera<U extends AnyUnit>(u: U): Tera<U>;

// @public (undocumented)
export type Terabyte = Tera<Byte>;

// @public (undocumented)
export const terabyte: Terabyte;

// @public (undocumented)
export type Teratryte = Tera<Tryte>;

// @public (undocumented)
export const teratryte: Teratryte;

// @public (undocumented)
export type Tesla = ComposedUnit<"Tesla", MagneticFluxDensity, [
Weber,
SquareMeter
]>;

// @public (undocumented)
export const tesla: Tesla;

// @public (undocumented)
export type Time = Dimension<"Time">;

// @public (undocumented)
export const time: T;

// @public (undocumented)
export type Torque = MomentOfForce;

// @public (undocumented)
export const torque: MomentOfForce;

// @public (undocumented)
export type Trit = Unit<"Trit", Information>;

// @public (undocumented)
export const trit: Trit;

// @public (undocumented)
export const trits: Trit;

// @public (undocumented)
export type Tryte = ConversionUnit<"Tryte", Equal<6, Trit>>;

// @public (undocumented)
export type Unit<Name extends string, D extends AnySimpleDimension> = {
    name: Name;
    type: "Unit";
    dimension: D;
};

// @public (undocumented)
export function unit<Name extends string, D extends AnySimpleDimension>(name: Name, dimension: D): Unit<Name, D>;

// @public (undocumented)
export type Volt = ComposedUnit<"Volt", ElectricPotentialDifference, [
Watt,
Ampere
]>;

// @public (undocumented)
export const volt: Volt;

// @public (undocumented)
export type Volume = Quantity<"Volume", Pow<Length, 3>>;

// @public (undocumented)
export const volume: Volume;

// @public (undocumented)
export type Watt = ComposedUnit<"Watt", Power, [Joule, Second]>;

// @public (undocumented)
export const watt: Watt;

// @public (undocumented)
export type Wavenumber = Quantity<"Wavenumber", Pow<Length, -1>>;

// @public (undocumented)
export const wavenumber: Wavenumber;

// @public (undocumented)
export type Weber = ComposedUnit<"Weber", MagneticFlux, [Second, Volt]>;

// @public (undocumented)
export const weber: Weber;

// @public (undocumented)
export type Work = Energy;

// @public (undocumented)
export const work: Energy;

// @public (undocumented)
export type Yobi<U extends AnyUnit> = BasicConv<U, "Yobi", 1.2089258196146292e24>;

// @public (undocumented)
export function yobi<U extends AnyUnit>(u: U): Yobi<U>;

// @public (undocumented)
export type Yobibyte = Yobi<Byte>;

// @public (undocumented)
export const yobibyte: Yobibyte;

// @public (undocumented)
export type Yobitryte = Yobi<Tryte>;

// @public (undocumented)
export const yobitryte: Yobitryte;

// @public (undocumented)
export type Yotta<U extends AnyUnit> = BasicConv<U, "Yotta", 1000000000000000000000000>;

// @public (undocumented)
export function yotta<U extends AnyUnit>(u: U): Yotta<U>;

// @public (undocumented)
export type Yottabyte = Yotta<Byte>;

// @public (undocumented)
export const yottabyte: Yottabyte;

// @public (undocumented)
export type Yottatryte = Yotta<Tryte>;

// @public (undocumented)
export const yottatryte: Yottatryte;

// @public (undocumented)
export type Zebi<U extends AnyUnit> = BasicConv<U, "Zebi", 1.1805916207174113e21>;

// @public (undocumented)
export function zebi<U extends AnyUnit>(u: U): Zebi<U>;

// @public (undocumented)
export type Zebibyte = Zebi<Byte>;

// @public (undocumented)
export const zebibyte: Zebibyte;

// @public (undocumented)
export type Zebitryte = Zebi<Tryte>;

// @public (undocumented)
export const zebitryte: Zebitryte;

// @public (undocumented)
export type Zetta<U extends AnyUnit> = BasicConv<U, "Zetta", 1000000000000000000000>;

// @public (undocumented)
export function zetta<U extends AnyUnit>(u: U): Zetta<U>;

// @public (undocumented)
export type Zettabyte = Zetta<Byte>;

// @public (undocumented)
export const zettabyte: Zettabyte;

// @public (undocumented)
export type Zettatryte = Zetta<Tryte>;

// @public (undocumented)
export const zettatryte: Zettatryte;

// @public (undocumented)
export type ?? = Temperature;

// (No @packageDocumentation comment for this package)

```
