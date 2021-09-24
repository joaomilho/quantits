# QuantiTS [alpha, not released yet]

<img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/SI_Illustration_Base_Units_and_Constants_Colour_Full.svg" width=200 />

Quantits is a typescript-first library about quantities.

Quantits is inspired by Idris' [quantities](https://github.com/timjb/quantities) libray.

## Dimensions

We start by defining dimensions in the SI system. For instance:

```ts
type Length = Dimension<"Length">;
const length: Length = dimension("Length");

type Time = Dimension<"Time">;
const time: Time = dimension("Time");
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
type Speed = Quantity<"Speed", Divide<Length, Time>>;
const speed: Speed = quantity("Speed", divide(length, time));

type Volume = Quantity<"Volume", Power<Length, 3>>;
const volume: Volume = quantity("Volume", power(length, 3));

type Frequency = Quantity<"Frequency", Power<Time, -1>>;
const frequency: Frequency = quantity("Frequency", power(time, -1));
```

## Units

Now, when we measure dimensions we use units. For the dimensions defined above we would do:

```ts
type Meter = Unit<"Meter", Length>;
const meter: Meter = unit("Meter", length);

type Second = Unit<"Second", Time>;
const second: Second = unit("Second", time);
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
type Kilometer = ConversionUnit<"Kilometer", Equal<1000, Meter>>;
const kilometer: Kilometer = conversionUnit("Kilometer", equal(1000, meter));

type Minute = ConversionUnit<"Minute", Equal<60, Second>>;
const minute: Minute = conversionUnit("Minute", equal(60, second));
```

To make conversions simpler, the library defines some conversion helpers, like `Kilo`/`kilo`, `Centi`/`centi`, etc, from the small `Femto`/`femto` to the big `Yotta`/`yotta`. It also provides `Sixty`/`sixty` and some other handy ones. Let's rewrite the code above now:

```ts
type Kilometer = Kilo<Meter>;
const kilometer: Kilometer = kilo(meter);

type Minute = Sixty<Second, "Minute">;
const minute: Minute = sixty(second, "Minute");
```

Note that in the `Kilo` helper, we can automatically know the name of thee new quantity will be prefixed by "Kilo", so there's no need to provide a name for the new unit, while in the Sixty we had to provide "Minute" as there's no way to infer it.

Now for composed dimensions, we use the composed unit helpers. Example:

```ts
type MeterPerSecond = ComposedUnit<
  "MeterPerSecond",
  Speed,
  [Meter, Second]
>;
const meterPerSecond: MeterPerSecond = composedUnit(
  "MeterPerSecond",
  speed,
  [meter, second]
);

type CubicMeter = ComposedUnit<"CubicMeter", Volume, [Meter]>;
const cubicMeter: CubicMeter = composedUnit("CubicMeter", volume, [
  meter,
]);

type Hertz = ComposedUnit<"Hertz", Frequency, [Second]>;
const hertz: Hertz = composedUnit("Hertz", frequency, [second]);
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

A measurement is an arbitrary amount of a certain unit. For instance:

```ts
measurement(1.71, meters) // my height
measurement(70, kilograms) // my weight
measurement(39, years) // my age
measurement(0, gigabytes) // space left in my hard drive
measurement(384400, kilometers) // distance from the Earth to the Moon
measurement(299792458, metersPerSecond) // speed of light (c)
```

Notice that a measurement is not fundamentally different than a conversion unit, apart from semantics. The speed of light is a measurement, but it can also be used as a unit (just like a kilometer, if you think about it).

You can also use measurements as the first param on the convert helper:

```ts
convert(measurement(1, meter), meter) // 1
convert(measurement(0, meter), meter) // 0
convert(measurement(500, meter), kilometer) // 0.5
convert(measurement(2, hour), second) // 7200
```

## Custom dimensions, quantities, units and measurements

With quantits, you're not limited to SI physical things. The library already exposes some other dimensions such as `Information` and its units, `bit` and `trit` along with conversions, like `megabyte` and `petatryte`, and composed quantities such as `Bandwidth` defined as Information per Time. Here's how to roll your own:

```ts
type Pain = Dimension<"Pain">;
const pain: Pain = dimension("Pain");

type Dol = Unit<"Dol", Pain>;
const dol: Dol = unit("Dol", pain);

const sting = measurement(1, dol)
const brokenLeg = measurement(8, dol)

type Pungency = Dimension<"Pungency">;
const pungency: Pungency = dimension("Pungency");

type Scoville = Unit<"Scoville", Pungency>;
const scoville: Scoville = unit("Scoville", pungency);

const paprika = measurement(100, scoville)
const jalapeno = measurement(5000, scoville)
const ghostPepper = measurement(1e6, scoville)

type Fame = Dimension<"Fame">;
const fame: Fame = dimension("Fame");

type Warhol = Unit<"Warhol", Fame>;
const warhol: Warhol = unit("Warhol", fame);

const pliniRoesslerHolgate = measurement(100, warhol)
const beatles = measurement(1e6, warhol)
const jesus = measurement(1e32, warhol)

type Kilowarhol = Kilo<Warhol>;
const kilowarhol: Kilowarhol = kilo(warhol);

type Hype = Quantity<"Hype", Divide<Fame, Time>>;
const hype: Hype = quantity("Hype", divide(fame, time));

const pliniRoesslerHolgate = measurement(100, hype)
const milliVanilli = measurement(1e6, hype)
const beatles = measurement(1e32, hype)

type Quarter = ConversionUnit<"Quarter", Equal<15, Minute>>;
const quarter = conversionUnit("Quarter", equal(15, minute));

export type WarholPer15Minutes = ComposedUnit<
  "WarholPer15Minutes",
  Hype,
  [Warhol, Quarter]
>;
export const warholPer15Minutes: WarholPer15Minutes = composedUnit(
  "WarholPer15Minutes",
  hype,
  [warhol, quarter]
);
```
