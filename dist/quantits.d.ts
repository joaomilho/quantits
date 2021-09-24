export declare const A: Ampere;

export declare type AbsorbedDose = Quantity<"AbsorbedDose", Divide<Energy, Mass>>;

export declare const absorbedDose: AbsorbedDose;

export declare type AbsorbedDoseRate = Quantity<"AbsorbedDoseRate", Divide<AbsorbedDose, Time>>;

export declare const absorbedDoseRate: AbsorbedDoseRate;

export declare type Acceleration = Quantity<"Acceleration", Divide<Speed, Time>>;

export declare const acceleration: Acceleration;

export declare type AmountConcentration = Quantity<"AmountConcentration", Divide<AmountOfSubstance, Volume>>;

export declare const amountConcentration: AmountConcentration;

export declare type AmountOfSubstance = Dimension<"AmountOfSubstance">;

export declare const amountOfSubstance: AmountOfSubstance;

export declare type Ampere = Unit<"Ampere", ElectricCurrent>;

export declare const ampere: Ampere;

export declare const amperes: Ampere;

export declare type AnyComposedUnit = ComposedUnit<string, AnyQuantity, any>;

export declare type AnyComposition = {
    d1: AnyDimension;
    op: Operation;
    d2: AnyDimension | number;
};

export declare type AnyConversion = {
    u: AnyUnit;
    op: Operation;
    n: number;
};

export declare type AnyConversionUnit = ConversionUnit<string, AnyConversion>;

export declare type AnyDimension = AnySimpleDimension | AnyQuantity;

export declare type AnyMeasurement = Measurement<number, AnyUnit>;

export declare type AnyQuantity = Quantity<string, AnyComposition>;

export declare type AnySimpleDimension = Dimension<string>;

export declare type AnySimpleUnit = Unit<string, AnySimpleDimension>;

export declare type AnyUnit = AnySimpleUnit | AnyComposedUnit | AnyConversionUnit;

export declare type Area = Quantity<"Area", Pow<Length, 2>>;

export declare const area: Area;

export declare const b: Bit;

export declare type Bandwidth = Quantity<"Bandwidth", Divide<Information, Time>>;

export declare const bandwidth: Bandwidth;

declare type BasicConv<U extends AnyUnit, Prefix extends string, N extends number> = ConversionUnit<`${Prefix}${Lowercase<U["name"]>}`, Equal<N, U>>;

export declare function basicConv<U extends AnyUnit, Prefix extends string, N extends number>(u: U, prefix: Prefix, n: N): BasicConv<U, Prefix, N>;

export declare type Becquerel = Hertz;

export declare const becquerel: Hertz;

export declare type Bit = Unit<"Bit", Information>;

export declare const bit: Bit;

export declare type Bitrate = ComposedUnit<"Bitrate", Bandwidth, [Bit, Second]>;

export declare const bits: Bit;

export declare type BPS = Bitrate;

export declare const bps: Bitrate;

export declare type Byte = ConversionUnit<"Byte", Equal<8, Bit>>;

declare type CalculateConversion<U1, U2> = U1 extends U2 ? number : U1 extends AnySimpleUnit ? U2 extends AnyConversionUnit ? CalculateConversion<U1, U2["conversion"]["u"]> : ConversionError : U1 extends AnyConversionUnit ? CalculateConversion<U1["conversion"]["u"], U2> : ConversionError;

export declare type Candela = Unit<"Candela", LuminousIntensity>;

export declare const candela: Candela;

export declare const candelas: Candela;

export declare type Capacitance = Quantity<"Capacitance", Divide<ElectricCharge, ElectricPotentialDifference>>;

export declare const capacitance: Capacitance;

export declare type CatalyticActivity = Quantity<"CatalyticActivity", Divide<AmountOfSubstance, Time>>;

export declare const catalyticActivity: CatalyticActivity;

export declare type CatalyticActivityConcentration = Quantity<"CatalyticActivityConcentration", Divide<CatalyticActivity, Volume>>;

export declare const catalyticActivityConcentration: CatalyticActivityConcentration;

export declare const cd: Candela;

export declare type Celsius = ConversionUnit<"Celsius", Sum<Kelvin, 273.15>>;

export declare const celsius: Celsius;

export declare type Centi<U extends AnyUnit> = BasicConv<U, "Centi", 0.01>;

export declare function centi<U extends AnyUnit>(u: U): Centi<U>;

export declare type Centimeter = Centi<Meter>;

export declare const centimeter: Centimeter;

export declare const centimeters: Centimeter;

export declare type ComposedUnit<Name extends string, CD extends AnyQuantity, US extends AnyUnit[]> = {
    type: "ComposedUnit";
    name: Name;
    dimension: CD;
    composedUnits: US;
};

export declare function composedUnit<Name extends string, CD extends AnyQuantity, US extends AnyUnit[]>(name: Name, dimension: CD, composedUnits: US): ComposedUnit<Name, CD, US>;

export declare type Composition<D1 extends AnyDimension, Op extends Operation, D2 extends AnyDimension | number> = {
    d1: D1;
    op: Op;
    d2: D2;
};

export declare const concentraction: AmountConcentration;

export declare type Concentration = AmountConcentration;

export declare type Conversion<U extends AnyUnit, Op extends Operation, N extends number> = {
    u: U;
    op: Op;
    n: N;
};

export declare class ConversionError extends Error {
    constructor(u1: AnyUnit, u2: AnyUnit);
}

export declare type ConversionUnit<Name extends string, C extends AnyConversion> = {
    type: "ConversionUnit";
    name: Name;
    conversion: C;
    dimension: null;
};

export declare function conversionUnit<Name extends string, C extends AnyConversion>(name: Name, conversion: C): ConversionUnit<Name, C>;

export declare function convert<U1 extends AnyUnit | AnyMeasurement, U2 extends AnyUnit>(u1: U1, u2: U2, ops?: Operations, initialValue?: number): CalculateConversion<U1, U2>;

export declare type Coulomb = ComposedUnit<"Coulomb", ElectricCharge, [Second, Ampere]>;

export declare const coulomb: Coulomb;

export declare type CubicMeter = ComposedUnit<"CubicMeter", Volume, [Meter]>;

export declare const cubicMeter: CubicMeter;

export declare type CurrentDensity = Quantity<"CurrentDensity", Divide<ElectricCurrent, Area>>;

export declare const currentDensity: CurrentDensity;

export declare type Deci<U extends AnyUnit> = BasicConv<U, "Deci", 0.1>;

export declare function deci<U extends AnyUnit>(u: U): Deci<U>;

export declare type Density = Quantity<"Density", Divide<Mass, Volume>>;

export declare const density: Density;

export declare type DigitalDimension = Information;

export declare type DigitalUnit = Bit | Trit;

export declare type Dimension<Name extends string> = {
    type: "Dimension";
    name: Name;
};

export declare function dimension<Name extends string>(name: Name): Dimension<Name>;

export declare type Divide<Q1 extends AnyDimension, Q2 extends AnyDimension> = Composition<Q1, "/", Q2>;

export declare function divide<D1 extends AnyDimension, D2 extends AnyDimension>(d1: D1, d2: D2): Divide<D1, D2>;

export declare type DynamicViscosity = Quantity<"CatalyticActivity", Multiply<Stress, Time>>;

export declare const dynamicViscosity: DynamicViscosity;

export declare type ElectricCharge = Quantity<"ElectricCharge", Multiply<ElectricCurrent, Time>>;

export declare const electricCharge: ElectricCharge;

export declare type ElectricChargeDensity = Quantity<"ElectricChargeDensity", Divide<ElectricCharge, Volume>>;

export declare const electricChargeDensity: ElectricChargeDensity;

export declare type ElectricConductance = Quantity<"ElectricConductance", Divide<ElectricCurrent, ElectricPotentialDifference>>;

export declare const electricConductance: ElectricConductance;

export declare type ElectricCurrent = Dimension<"ElectricCurrent">;

export declare const electricCurrent: ElectricCurrent;

export declare type ElectricDisplacement = SurfaceChargeDensity;

export declare const electricDisplacement: SurfaceChargeDensity;

export declare type ElectricFieldStrength = Quantity<"ElectricFieldStrength", Divide<ElectricPotentialDifference, Length>>;

export declare const electricFieldStrength: ElectricFieldStrength;

export declare type ElectricFluxDensity = SurfaceChargeDensity;

export declare const electricFluxDensity: SurfaceChargeDensity;

export declare type ElectricPotentialDifference = Quantity<"ElectricPotentialDifference", Divide<Power, ElectricCurrent>>;

export declare const electricPotentialDifference: ElectricPotentialDifference;

export declare type ElectricResistance = Quantity<"ElectricResistance", Divide<ElectricPotentialDifference, ElectricCurrent>>;

export declare const electricResistance: ElectricResistance;

export declare type Energy = Quantity<"Energy", Multiply<Force, Length>>;

export declare const energy: Energy;

export declare type EnergyDensity = Quantity<"EnergyDensity", Divide<Energy, Volume>>;

export declare const energyDensity: EnergyDensity;

export declare type Entropy = HeatCapacity;

export declare const entropy: HeatCapacity;

export declare type Equal<N extends number, U extends AnyUnit> = Conversion<U, "*", N>;

export declare function equal<N extends number, U extends AnyUnit>(n: N, u: U): Equal<N, U>;

export declare type Exa<U extends AnyUnit> = BasicConv<U, "Exa", 1000000000000000000>;

export declare function exa<U extends AnyUnit>(u: U): Exa<U>;

export declare type Exabyte = Exa<Byte>;

export declare const exabyte: Exabyte;

export declare type Exatryte = Exa<Tryte>;

export declare const exatryte: Exatryte;

export declare type Exbi<U extends AnyUnit> = BasicConv<U, "Exbi", 1152921504606847000>;

export declare function exbi<U extends AnyUnit>(u: U): Exbi<U>;

export declare type Exbibyte = Exbi<Byte>;

export declare const exbibyte: Exbibyte;

export declare type Exbitryte = Exbi<Tryte>;

export declare const exbitryte: Exbitryte;

export declare type Exposure = Quantity<"Exposure", Divide<ElectricCharge, Mass>>;

export declare const exposure: Exposure;

export declare type Fahrenheit = ConversionUnit<"Fahrenheit", Sum<ConversionUnit<"_", Equal<1.8, Kelvin>>, 32>>;

export declare type Farad = ComposedUnit<"Farad", Capacitance, [Coulomb, Volt]>;

export declare const farad: Farad;

export declare const farenheit: ConversionUnit<"Fahrenheit", Sum<ConversionUnit<"_", Equal<1.8, Celsius>>, 32>>;

export declare type Femto<U extends AnyUnit> = BasicConv<U, "Femto", 0.000000000000001>;

export declare function femto<U extends AnyUnit>(u: U): Femto<U>;

export declare type Force = Quantity<"Force", Multiply<Acceleration, Mass>>;

export declare const force: Force;

export declare type Frequency = Quantity<"Frequency", Pow<Time, -1>>;

export declare const frequency: Frequency;

export declare type Gibi<U extends AnyUnit> = BasicConv<U, "Gibi", 1073741824>;

export declare function gibi<U extends AnyUnit>(u: U): Gibi<U>;

export declare type Gibibyte = Gibi<Byte>;

export declare const gibibyte: Gibibyte;

export declare type Gibitryte = Gibi<Tryte>;

export declare const gibitryte: Gibitryte;

export declare type Giga<U extends AnyUnit> = BasicConv<U, "Giga", 1000000000>;

export declare function giga<U extends AnyUnit>(u: U): Giga<U>;

export declare type Gigabyte = Giga<Byte>;

export declare const gigabyte: Gigabyte;

export declare type Gigatryte = Giga<Tryte>;

export declare const gigatryte: Gigatryte;

export declare type Gray = ComposedUnit<"Gray", AbsorbedDose, [Joule, Kilogram]>;

export declare const gray: Gray;

export declare type HeatCapacity = Quantity<"HeatCapacity", Divide<Energy, Temperature>>;

export declare const heatCapacity: HeatCapacity;

export declare type HeatFluxDensity = Quantity<"HeatFluxDensity", Divide<Power, Area>>;

export declare const heatFluxDensity: HeatFluxDensity;

export declare type Henry = ComposedUnit<"Henry", Inductance, [Weber, Ampere]>;

export declare const henry: Henry;

export declare type Hertz = ComposedUnit<"Hertz", Frequency, [Second]>;

export declare const hertz: Hertz;

export declare type Hour = ConversionUnit<"Hour", Equal<3600, Second>>;

export declare const hour: Hour;

export declare const hours: Hour;

export declare type HypercubicMeter = ComposedUnit<"HypercubicMeter", Hypervolume, [
Meter
]>;

export declare const hypercubicMeter: HypercubicMeter;

export declare type Hypervolume = Quantity<"Hypervolume", Pow<Length, 4>>;

export declare const hypervolume: Hypervolume;

export declare type I = ElectricCurrent;

export declare type Illuminance = Quantity<"MagneticFluxDensity", Divide<LuminousFlux, Area>>;

export declare const illuminance: Illuminance;

export declare type Inductance = Quantity<"MagneticFluxDensity", Divide<MagneticFlux, ElectricCurrent>>;

export declare const inductance: Inductance;

export declare type Information = Dimension<"Information">;

export declare const information: Information;

export declare type Irradiance = HeatFluxDensity;

export declare const irradiance: HeatFluxDensity;

export declare type J = LuminousIntensity;

export declare type Joule = ComposedUnit<"Joule", Energy, [Newton, Meter]>;

export declare const joule: Joule;

export declare const K: Kelvin;

export declare type Katal = ComposedUnit<"Katal", CatalyticActivity, [Mole, Second]>;

export declare const katal: Katal;

export declare type Kelvin = Unit<"Kelvin", Temperature>;

export declare const kelvin: Kelvin;

export declare const kelvins: Kelvin;

export declare type Kerma = AbsorbedDose;

export declare const kerma: AbsorbedDose;

export declare const kg: Kilogram;

export declare type Kibi<U extends AnyUnit> = BasicConv<U, "Kibi", 1024>;

export declare function kibi<U extends AnyUnit>(u: U): Kibi<U>;

export declare type Kibibyte = Kibi<Byte>;

export declare const kibibyte: Kibibyte;

export declare type Kibitryte = Kibi<Tryte>;

export declare const kibitryte: Kibitryte;

export declare type Kilo<U extends AnyUnit> = BasicConv<U, "Kilo", 1000>;

export declare function kilo<U extends AnyUnit>(u: U): Kilo<U>;

export declare type Kilobyte = Kilo<Byte>;

export declare const kilobyte: Kilobyte;

export declare type Kilogram = Unit<"Kilogram", Mass>;

export declare const kilogram: Kilogram;

export declare const kilograms: Kilogram;

export declare type Kilometer = Kilo<Meter>;

export declare const kilometer: Kilometer;

export declare type KilometerPerHour = ComposedUnit<"KilometerPerHour", Speed, [
Kilometer,
Hour
]>;

export declare const kilometerPerHour: KilometerPerHour;

export declare type KilometerPerSecond = ComposedUnit<"KilometerPerSecond", Speed, [
Kilometer,
Second
]>;

export declare const kilometerPerSecond: KilometerPerSecond;

export declare const kilometers: Kilometer;

export declare type Kilotryte = Kilo<Tryte>;

export declare const kilotryte: Kilotryte;

export declare type KinematicViscosity = Quantity<"KinematicViscosity", Divide<Area, Time>>;

export declare const kinematicViscosity: KinematicViscosity;

export declare type L = Length;

export declare type Length = Dimension<"Length">;

declare const length_2: Length;
export { length_2 as length }

export declare type Liter = ConversionUnit<"Liter", Equal<0.001, CubicMeter>>;

export declare const liter: Liter;

export declare type Lumen = ComposedUnit<"Lumen", LuminousFlux, [Candela, Steradian]>;

export declare const lumen: Lumen;

export declare type Luminance = Quantity<"Luminance", Divide<LuminousIntensity, Area>>;

export declare const luminance: Luminance;

export declare type LuminousFlux = Quantity<"LuminousFlux", Multiply<LuminousIntensity, SolidAngle>>;

export declare const luminousFlux: LuminousFlux;

export declare type LuminousIntensity = Dimension<"LuminousIntensity">;

export declare const luminousIntensity: LuminousIntensity;

export declare type Lux = ComposedUnit<"Lux", Illuminance, [Lumen, SquareMeter]>;

export declare const lux: Lux;

export declare type M = Mass;

export declare const m: Meter;

export declare type MagneticFieldStrength = Quantity<"MagneticFieldStrength", Divide<ElectricCurrent, Length>>;

export declare const magneticFieldStrength: MagneticFieldStrength;

export declare type MagneticFlux = Quantity<"MagneticFlux", Multiply<Time, ElectricPotentialDifference>>;

export declare const magneticFlux: MagneticFlux;

export declare type MagneticFluxDensity = Quantity<"MagneticFluxDensity", Divide<MagneticFlux, Area>>;

export declare const magneticFluxDensity: MagneticFluxDensity;

export declare type Mass = Dimension<"Mass">;

export declare const mass: Mass;

export declare type MassConcentration = Quantity<"MassConcentration", Divide<Mass, Volume>>;

export declare const massConcentration: MassConcentration;

export declare type Measurement<N extends number, U extends AnyUnit> = {
    type: "Measurement";
    n: N;
    u: AnyUnit;
};

export declare function measurement<N extends number, U extends AnyUnit>(n: N, u: U): Measurement<N, U>;

export declare type Mebi<U extends AnyUnit> = BasicConv<U, "Mebi", 1048576>;

export declare function mebi<U extends AnyUnit>(u: U): Mebi<U>;

export declare type Mebibyte = Mebi<Byte>;

export declare const mebibyte: Mebibyte;

export declare type Mebitryte = Mebi<Tryte>;

export declare const mebitryte: Mebitryte;

export declare type Mega<U extends AnyUnit> = BasicConv<U, "Mega", 1000000>;

export declare function mega<U extends AnyUnit>(u: U): Mega<U>;

export declare type Megabyte = Mega<Byte>;

export declare const megabyte: Megabyte;

export declare type Megatryte = Mega<Tryte>;

export declare const megatryte: Megatryte;

export declare type Meter = Unit<"Meter", Length>;

export declare const meter: Meter;

export declare type MeterPerSecond = ComposedUnit<"MeterPerSecond", Speed, [
Meter,
Second
]>;

export declare const meterPerSecond: MeterPerSecond;

export declare type MeterPerSecondSquare = ComposedUnit<"MeterPerSecondSquare", Acceleration, [
MeterPerSecond,
Second
]>;

export declare const meterPerSecondSquare: MeterPerSecondSquare;

export declare const meters: Meter;

export declare type Micro<U extends AnyUnit> = BasicConv<U, "Micro", 0.000001>;

export declare function micro<U extends AnyUnit>(u: U): Micro<U>;

export declare type Mili<U extends AnyUnit> = BasicConv<U, "Mili", 0.001>;

export declare function mili<U extends AnyUnit>(u: U): Mili<U>;

export declare type Minute = Sixty<Second, "Minute">;

export declare const minute: Minute;

export declare const minutes: Minute;

export declare const mol: Mole;

export declare type MolarEnergy = Quantity<"MolarEnergy", Divide<Energy, AmountOfSubstance>>;

export declare const molarEnergy: MolarEnergy;

export declare type MolarHeatCapacity = MolarEnergy;

export declare const molarHeatCapacity: MolarEnergy;

export declare type Mole = Unit<"Mole", AmountOfSubstance>;

export declare const mole: Mole;

export declare const moles: Mole;

export declare type Moment = MomentOfForce;

export declare const moment: MomentOfForce;

export declare type MomentOfForce = Quantity<"MomentOfForce", Multiply<Force, Length>>;

export declare const momentOfForce: MomentOfForce;

export declare type Multiply<Q1 extends AnyDimension, Q2 extends AnyDimension> = Composition<Q1, "*", Q2>;

export declare function multiply<D1 extends AnyDimension, D2 extends AnyDimension>(d1: D1, d2: D2): Multiply<D1, D2>;

export declare type N = AmountOfSubstance;

export declare type Nano<U extends AnyUnit> = BasicConv<U, "Nano", 0.000000001>;

export declare function nano<U extends AnyUnit>(u: U): Nano<U>;

export declare type Newton = ComposedUnit<"Newton", Force, [
MeterPerSecondSquare,
Kilogram
]>;

export declare const newton: Newton;

export declare type Ohm = ComposedUnit<"Ohm", ElectricResistance, [Volt, Ampere]>;

export declare const ohm: Ohm;

export declare type Operation = "+" | "-" | "*" | "/" | "^" | "√";

declare type Operations = [Operation, number][];

export declare type Pascal = ComposedUnit<"Pascal", Pressure, [Newton, SquareMeter]>;

export declare const pascal: Pascal;

export declare type Pebi<U extends AnyUnit> = BasicConv<U, "Pebi", 1125899906842624>;

export declare function pebi<U extends AnyUnit>(u: U): Pebi<U>;

export declare type Pebibyte = Pebi<Byte>;

export declare type Pebitryte = Pebi<Tryte>;

export declare type Permeability = Quantity<"Permeability", Divide<Inductance, Length>>;

export declare const permeability: Permeability;

export declare type Permittivity = Quantity<"Permittivity", Divide<Capacitance, Length>>;

export declare const permittivity: Permittivity;

export declare type Peta<U extends AnyUnit> = BasicConv<U, "Peta", 1000000000000000>;

export declare function peta<U extends AnyUnit>(u: U): Peta<U>;

export declare type Petabyte = Peta<Byte>;

export declare const petabyte: Petabyte;

export declare type Petatryte = Peta<Tryte>;

export declare const petatryte: Petatryte;

export declare const petbibyte: Pebibyte;

export declare const petbitryte: Pebitryte;

export declare type PhysicsDimension = L | M | T | I | Θ | N | J;

export declare type PhysicsUnit = Second | Meter | Kilogram | Ampere | Kelvin | Mole | Candela;

export declare type Pico<U extends AnyUnit> = BasicConv<U, "Pico", 0.000000000001>;

export declare function pico<U extends AnyUnit>(u: U): Pico<U>;

export declare type PlaneAngle = Dimension<"PlaneAngle">;

export declare const planeAngle: Dimension<"PlaneAngle">;

export declare type Pow<D1 extends AnyDimension, Exp extends number> = Composition<D1, "^", Exp>;

export declare function pow<D1 extends AnyDimension, Exp extends number>(d1: D1, exp: Exp): Pow<D1, Exp>;

export declare type Power = Quantity<"Power", Divide<Energy, Time>>;

export declare const power: Power;

export declare type Pressure = Quantity<"Pressure", Divide<Force, Area>>;

export declare const pressure: Pressure;

export declare type Quantity<Name extends string, C extends AnyComposition> = {
    type: "Quantity";
    name: Name;
    composition: C;
};

export declare function quantity<Name extends string, C extends AnyComposition>(name: Name, composition: C): Quantity<Name, C>;

export declare type Rad = Radian;

export declare const radi: Radian;

export declare type Radian = Unit<"Radian", PlaneAngle>;

export declare const radian: Radian;

export declare type Radiance = Quantity<"Radiance", Divide<RadiantIntensity, Area>>;

export declare const radiance: Radiance;

export declare type RadiantIntensity = Quantity<"RadiantIntensity", Divide<Power, SolidAngle>>;

export declare const radiantIntensity: RadiantIntensity;

export declare type RefractiveIndex = Dimension<"RefractiveIndex">;

export declare const refractiveIndex: Dimension<"RefractiveIndex">;

export declare type RelativePermeability = Dimension<"RelativePermeability">;

export declare const relativePermeability: Dimension<"RelativePermeability">;

export declare const s: Second;

export declare type Second = Unit<"Second", Time>;

export declare const second: Second;

export declare const seconds: Second;

export declare type Siemens = ComposedUnit<"Siemens", ElectricConductance, [
Ampere,
Volt
]>;

export declare const siemens: Siemens;

export declare type Sievert = Gray;

export declare const sievert: Gray;

export declare type SimpleDimension = PhysicsDimension | DigitalDimension;

export declare type SimpleUnit = PhysicsUnit | DigitalUnit;

export declare type Sixty<U extends AnyUnit, Name extends string> = BasicConv<U, Name, 60>;

export declare function sixty<U extends AnyUnit, Name extends string>(u: U, name: Name): Sixty<U, Name>;

export declare type SolidAngle = Dimension<"SolidAngle">;

export declare const solidAngle: Dimension<"SolidAngle">;

export declare type SpecificEnergy = AbsorbedDose;

export declare const specificEnergy: AbsorbedDose;

export declare type SpecificEntropy = SpecificHeatCapacity;

export declare const SpecificEntropy: SpecificHeatCapacity;

export declare type SpecificHeatCapacity = Quantity<"SpecificHeatCapacity", Divide<HeatCapacity, Mass>>;

export declare const specificHeatCapacity: SpecificHeatCapacity;

export declare type SpecificVolume = Quantity<"SpecificVolume", Divide<Volume, Mass>>;

export declare const specificVolume: SpecificVolume;

export declare type Speed = Quantity<"Speed", Divide<Length, Time>>;

export declare const speed: Speed;

export declare type SquareMeter = ComposedUnit<"SquareMeter", Area, [Meter]>;

export declare const squareMeter: SquareMeter;

export declare type Steradian = Unit<"Steradian", SolidAngle>;

export declare const steradian: Steradian;

export declare type Stress = Pressure;

export declare type Subtract<U extends AnyUnit, N extends number> = Conversion<U, "-", N>;

export declare function subtract<U extends AnyUnit, N extends number>(u: U, n: N): Subtract<U, N>;

export declare type Sum<U extends AnyUnit, N extends number> = Conversion<U, "+", N>;

export declare function sum<U extends AnyUnit, N extends number>(u: U, n: N): Sum<U, N>;

export declare type SurfaceChargeDensity = Quantity<"SurfaceChargeDensity", Divide<ElectricCharge, Area>>;

export declare const surfaceChargeDensity: SurfaceChargeDensity;

export declare type SurfaceDensity = Quantity<"SurfaceDensity", Divide<Mass, Area>>;

export declare const surfaceDensity: SurfaceDensity;

export declare type SurfaceTension = Quantity<"SurfaceTension", Divide<Force, Length>>;

export declare const surfaceTension: SurfaceTension;

export declare type T = Time;

export declare type Tebi<U extends AnyUnit> = BasicConv<U, "Tebi", 1099511627776>;

export declare function tebi<U extends AnyUnit>(u: U): Tebi<U>;

export declare type Tebibyte = Tebi<Byte>;

export declare const tebibyte: Tebibyte;

export declare type Tebitryte = Tebi<Tryte>;

export declare const tebitryte: Tebitryte;

export declare type Temperature = Dimension<"Temperature">;

export declare const temperature: Temperature;

export declare type Tera<U extends AnyUnit> = BasicConv<U, "Tera", 1000000000000>;

export declare function tera<U extends AnyUnit>(u: U): Tera<U>;

export declare type Terabyte = Tera<Byte>;

export declare const terabyte: Terabyte;

export declare type Teratryte = Tera<Tryte>;

export declare const teratryte: Teratryte;

export declare type Tesla = ComposedUnit<"Tesla", MagneticFluxDensity, [
Weber,
SquareMeter
]>;

export declare const tesla: Tesla;

export declare type Time = Dimension<"Time">;

export declare const time: T;

export declare type Torque = MomentOfForce;

export declare const torque: MomentOfForce;

export declare type Trit = Unit<"Trit", Information>;

export declare const trit: Trit;

export declare const trits: Trit;

export declare type Tryte = ConversionUnit<"Tryte", Equal<6, Trit>>;

export declare type Unit<Name extends string, D extends AnySimpleDimension> = {
    name: Name;
    type: "Unit";
    dimension: D;
};

export declare function unit<Name extends string, D extends AnySimpleDimension>(name: Name, dimension: D): Unit<Name, D>;

export declare type Volt = ComposedUnit<"Volt", ElectricPotentialDifference, [
Watt,
Ampere
]>;

export declare const volt: Volt;

export declare type Volume = Quantity<"Volume", Pow<Length, 3>>;

export declare const volume: Volume;

export declare type Watt = ComposedUnit<"Watt", Power, [Joule, Second]>;

export declare const watt: Watt;

export declare type Wavenumber = Quantity<"Wavenumber", Pow<Length, -1>>;

export declare const wavenumber: Wavenumber;

export declare type Weber = ComposedUnit<"Weber", MagneticFlux, [Second, Volt]>;

export declare const weber: Weber;

export declare type Work = Energy;

export declare const work: Energy;

export declare type Yobi<U extends AnyUnit> = BasicConv<U, "Yobi", 1.2089258196146292e24>;

export declare function yobi<U extends AnyUnit>(u: U): Yobi<U>;

export declare type Yobibyte = Yobi<Byte>;

export declare const yobibyte: Yobibyte;

export declare type Yobitryte = Yobi<Tryte>;

export declare const yobitryte: Yobitryte;

export declare type Yotta<U extends AnyUnit> = BasicConv<U, "Yotta", 1000000000000000000000000>;

export declare function yotta<U extends AnyUnit>(u: U): Yotta<U>;

export declare type Yottabyte = Yotta<Byte>;

export declare const yottabyte: Yottabyte;

export declare type Yottatryte = Yotta<Tryte>;

export declare const yottatryte: Yottatryte;

export declare type Zebi<U extends AnyUnit> = BasicConv<U, "Zebi", 1.1805916207174113e21>;

export declare function zebi<U extends AnyUnit>(u: U): Zebi<U>;

export declare type Zebibyte = Zebi<Byte>;

export declare const zebibyte: Zebibyte;

export declare type Zebitryte = Zebi<Tryte>;

export declare const zebitryte: Zebitryte;

export declare type Zetta<U extends AnyUnit> = BasicConv<U, "Zetta", 1000000000000000000000>;

export declare function zetta<U extends AnyUnit>(u: U): Zetta<U>;

export declare type Zettabyte = Zetta<Byte>;

export declare const zettabyte: Zettabyte;

export declare type Zettatryte = Zetta<Tryte>;

export declare const zettatryte: Zettatryte;

export declare type Θ = Temperature;

export { }
