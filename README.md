# Quantits [alpha, not released yet]

<img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/SI_Illustration_Base_Units_and_Constants_Colour_Full.svg" width=200 />

Quantits is a typescript-first library about quantities.

Quantits is inspired by Idris' [quantities](https://github.com/timjb/quantities) libray.

## Dimensions

We start by defining dimensions in the SI system. For instance:

```ts
export type Length = Dimension<"Length">;
export const length: Length = dimension("Length");

export type Time = Dimension<"Time">;
export const time: Time = dimension("Time");
```

All basic quantities are defined in the library:

- Length
- Time
- Mass
- ElectricCurrent
- Temperature
- AmountOfSubstance
- LuminousIntensity

We can also have coomposed dimensions (aka _quantities_):

```ts
export type Speed = Quantity<"Speed", Divide<Length, Time>>;
export const speed: Speed = quantity("Speed", divide(length, time));

export type Volume = Quantity<"Volume", Power<Length, 3>>;
export const volume: Volume = quantity("Volume", power(length, 3));

export type Frequency = Quantity<"Frequency", Power<Time, -1>>;
export const frequency: Frequency = quantity("Frequency", power(time, -1));
```

## Units

Now, when we measure dimensions we use units. For the dimensions defined above we would do:

```ts
export type Meter = Unit<"Meter", Length>;
export const meter: Meter = unit("Meter", length);

export type Second = Unit<"Second", Time>;
export const second: Second = unit("Second", time);
```

So here we're saying a second is a unit of time and a meter is a unit for length. In the SI, the 7 units for the 7 basic dimensions are:

- Lengh: meter
- Time: second
- Mass: kilogram
- ElectricCurrent: ampere
- Temperature: kelvin
- AmountOfSubstance: mole
- LuminousIntensity: candela

All these units are defined in the library.

Now, units can be converted. For instance:

```ts
export type Kilometer = ConversionUnit<"Kilometer", Equal<1000, Meter>>;
export const kilometer: Kilometer = conversionUnit("Kilometer", equal(1000, meter));

export type Minute = ConversionUnit<"Minute", Equal<60, Second>>;
export const minute: Minute = conversionUnit("Meter", equal(60, second));
```

To make conversions simpler, the library defines some conversion helpers, like `Kilo`/`kilo`, `Centi`/`centi`, etc, from the small `Femto`/`femto` to the big `Yotta`/`yotta`. It also provides `Sixty`/`sixty` and some other handy ones. Let's rewrite the code above now:

```ts
export type Kilometer = Kilo<Meter>;
export const kilometer: Kilometer = kilo(meter);

export type Minute = Sixty<Second, "Minute">;
export const minute: Minute = sixty(second, "Minute");
```

Note that in the `Kilo` helper, we can automatically know the name of thee new quantity will be prefixed by "Kilo", so there's no need to provide a name for the new unit, while in the Sixty we had to provide "Minute" as there's no way to infer it.

Now for composed dimensions, we use the composed unit helpers. Example:

```ts
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

export type CubicMeter = ComposedUnit<"CubicMeter", Volume, [Meter]>;
export const cubicMeter: CubicMeter = composedUnit("CubicMeter", volume, [
  meter,
]);

export type Hertz = ComposedUnit<"Hertz", Frequency, [Second]>;
export const hertz: Hertz = composedUnit("Hertz", frequency, [second]);
```

Thiis is defining a unit for speed in meters and seconds (note the relation is defined in the dimensions), a unit of volume in terms of meters – cubic meters – and a unit of frequency in terms of seconds – hertz. You could also, as a matter of exercise, define speed in kilometers per hour, feet per year or marathon per femtosecond. Up to you.

## convert

Now, one can convert units to other units, when possible.

```ts
convert(meter, meter) // 1
convert(meter, kilometer) // 1000
convert(second, minute) // 60
convert(meterPerSecond, kilometerPerHour) // 3.6

convert(meter, second) // ConversionError (typesafe-ish)
```

## Measurements

TODO
