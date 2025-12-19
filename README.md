# QuantiTS

<img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/SI_Illustration_Base_Units_and_Constants_Colour_Full.svg" width=200 />

A TypeScript-first library for type-safe quantities, dimensions, and unit conversions.

Inspired by Idris' [quantities](https://github.com/timjb/quantities) library.

## Features

- **Type-safe conversions** - Catch dimension mismatches at compile time
- **SI units** - All 7 base SI dimensions and their derived quantities
- **Composable** - Build your own dimensions and units
- **Precise** - Uses [BigDecimal.js](https://github.com/srknzl/bigdecimal.js) for arbitrary precision arithmetic
- **Modern** - ESM and CommonJS dual builds, TypeScript 5.x

## Installation

```bash
npm install quantits
```

## Quick Start

```typescript
import { convert, measurement, meter, kilometer, second, minute } from 'quantits';

// Simple conversions
convert(meter, kilometer).numberValue(); // 0.001
convert(kilometer, meter).numberValue(); // 1000

// With measurements
convert(measurement(1000, meter), kilometer).numberValue(); // 1
convert(measurement(90, second), minute).numberValue();     // 1.5

// Composed units work too
import { meterPerSecond, kilometerPerHour } from 'quantits';
convert(meterPerSecond, kilometerPerHour).numberValue(); // 3.6
```

## Dimensions

Dimensions represent fundamental physical quantities. The library includes all 7 SI base dimensions:

- **Length** - spatial extent
- **Time** - temporal duration
- **Mass** - amount of matter
- **ElectricCurrent** - flow of electric charge
- **Temperature** - thermodynamic temperature
- **AmountOfSubstance** - number of particles
- **LuminousIntensity** - luminous power per solid angle

```typescript
import { dimension, Dimension } from 'quantits';

// Define custom dimensions
type Pain = Dimension<"Pain">;
const pain: Pain = dimension("Pain");

type Pungency = Dimension<"Pungency">;
const pungency: Pungency = dimension("Pungency");
```

### Composed Dimensions (Quantities)

Combine dimensions using `divide`, `multiply`, and `pow`:

```typescript
import { quantity, divide, multiply, pow, length, time, mass } from 'quantits';

// Speed = Length / Time
type Speed = Quantity<"Speed", Divide<Length, Time>>;
const speed: Speed = quantity("Speed", divide(length, time));

// Volume = Length^3
type Volume = Quantity<"Volume", Pow<Length, 3>>;
const volume: Volume = quantity("Volume", pow(length, 3));

// Force = Mass * Acceleration = Mass * (Length / Time^2)
type Force = Quantity<"Force", Multiply<Acceleration, Mass>>;
```

## Units

Units are specific measures of dimensions:

```typescript
import { unit, Unit, meter, second, kilogram } from 'quantits';

// The 7 SI base units are pre-defined:
// meter (length), second (time), kilogram (mass), ampere (current),
// kelvin (temperature), mole (amount), candela (luminosity)

// Define custom units
import { pain } from './my-dimensions';
type Dol = Unit<"Dol", Pain>;
const dol: Dol = unit("Dol", pain);
```

### Conversion Units

Define units in terms of other units:

```typescript
import { conversionUnit, equal, kilo } from 'quantits';

// 1 kilometer = 1000 meters
type Kilometer = Kilo<Meter>;
const kilometer: Kilometer = kilo(meter);

// 1 minute = 60 seconds  
type Minute = Sixty<Second, "Minute">;
const minute: Minute = sixty(second, "Minute");

// Custom conversions
type Mile = ConversionUnit<"Mile", Equal<1609.344, Meter>>;
const mile: Mile = conversionUnit("Mile", equal(1609.344, meter));
```

### Composed Units

Units for composed dimensions:

```typescript
import { composedUnit, speed, meter, second, kilometer, hour } from 'quantits';

type MeterPerSecond = ComposedUnit<"MeterPerSecond", Speed, [Meter, Second]>;
const meterPerSecond = composedUnit("MeterPerSecond", speed, [meter, second]);

type KilometerPerHour = ComposedUnit<"KilometerPerHour", Speed, [Kilometer, Hour]>;
const kilometerPerHour = composedUnit("KilometerPerHour", speed, [kilometer, hour]);
```

## Conversions

The `convert` function handles conversions between compatible units:

```typescript
import { convert, measurement } from 'quantits';

// Unit to unit (returns conversion factor)
convert(meter, kilometer).numberValue();  // 0.001
convert(kilometer, meter).numberValue();  // 1000

// Measurement to unit
convert(measurement(500, meter), kilometer).numberValue(); // 0.5
convert(measurement(2, hour), second).numberValue();       // 7200

// Temperature conversions work too
convert(measurement(100, fahrenheit), celsius).numberValue(); // ~37.78

// Incompatible dimensions throw at runtime (and error at type level)
convert(meter, second); // throws ConversionError
```

## Measurements

Measurements combine a numeric value with a unit:

```typescript
import { measurement, meters, kilograms, years } from 'quantits';

const height = measurement(1.71, meters);
const weight = measurement(70, kilograms);
const age = measurement(39, years);
```

## Included Units

### Physics

- **Length**: meter, centimeter, kilometer, light year, Planck length
- **Time**: second, minute, hour, day, week, year, picosecond
- **Mass**: kilogram, Planck mass
- **Temperature**: kelvin, celsius, fahrenheit
- **Speed**: meter/second, kilometer/hour
- **Force**: newton
- **Energy**: joule
- **Power**: watt
- ...and many more SI derived units

### Digital

- **Information**: bit, byte, trit, tryte
- **Prefixes**: kilo, mega, giga, tera, peta, exa (1000-based)
- **Binary prefixes**: kibi, mebi, gibi, tebi, pebi, exbi (1024-based)
- **Bandwidth**: bits per second

### Imperial

- **Length**: inch, foot, yard, mile, league, nautical mile
- **Area**: acre, square mile

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Type check
npm run typecheck

# Build
npm run build

# Lint and format
npm run lint:fix

# Generate docs
npm run docs
```

## License

MIT
