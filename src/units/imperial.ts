import type { ConversionUnit } from "../core.js";
import { conversionUnit } from "../core.js";
import type { Equal } from "./helpers.js";
import { equal } from "./helpers.js";
import type { Meter, SquareMeter } from "./physics.js";
import { meter, squareMeter } from "./physics.js";

// Imperial length units

export type Twip = ConversionUnit<"Twip", Equal<0.00001763888888888889, Meter>>;
export const twip: Twip = conversionUnit("Twip", equal(0.00001763888888888889, meter));

export type Thou = ConversionUnit<"Thou", Equal<0.0000254, Meter>>;
export const thou: Thou = conversionUnit("Thou", equal(0.0000254, meter));
export const mil = thou;

export type Barleycorn = ConversionUnit<"Barleycorn", Equal<0.008466666666666667, Meter>>;
export const barleycorn: Barleycorn = conversionUnit(
  "Barleycorn",
  equal(0.008466666666666667, meter)
);

export type Inch = ConversionUnit<"Inch", Equal<0.0254, Meter>>;
export const inch: Inch = conversionUnit("Inch", equal(0.0254, meter));
export const inches = inch;

export type Hand = ConversionUnit<"Hand", Equal<0.1016, Meter>>;
export const hand: Hand = conversionUnit("Hand", equal(0.1016, meter));
export const hands = hand;

export type Foot = ConversionUnit<"Foot", Equal<0.3048, Meter>>;
export const foot: Foot = conversionUnit("Foot", equal(0.3048, meter));
export const feet = foot;

export type Yard = ConversionUnit<"Yard", Equal<0.9144, Meter>>;
export const yard: Yard = conversionUnit("Yard", equal(0.9144, meter));
export const yards = yard;

export type Chain = ConversionUnit<"Chain", Equal<20.1168, Meter>>;
export const chain: Chain = conversionUnit("Chain", equal(20.1168, meter));

export type Furlong = ConversionUnit<"Furlong", Equal<201.168, Meter>>;
export const furlong: Furlong = conversionUnit("Furlong", equal(201.168, meter));

export type Mile = ConversionUnit<"Mile", Equal<1609.344, Meter>>;
export const mile: Mile = conversionUnit("Mile", equal(1609.344, meter));

export type League = ConversionUnit<"League", Equal<4828.032, Meter>>;
export const league: League = conversionUnit("League", equal(4828.032, meter));

export type Fathom = ConversionUnit<"Fathom", Equal<1.852, Meter>>;
export const fathom: Fathom = conversionUnit("Fathom", equal(1.852, meter));

export type Cable = ConversionUnit<"Cable", Equal<185.2, Meter>>;
export const cable: Cable = conversionUnit("Cable", equal(185.2, meter));

export type NauticalMile = ConversionUnit<"NauticalMile", Equal<1852, Meter>>;
export const nauticalMile: NauticalMile = conversionUnit("NauticalMile", equal(1852, meter));

// Gunter's survey units (17th century onwards)

export type Link = ConversionUnit<"Link", Equal<0.201168, Meter>>;
export const link: Link = conversionUnit("Link", equal(0.201168, meter));

export type Rod = ConversionUnit<"Rod", Equal<5.0292, Meter>>;
export const rod: Rod = conversionUnit("Rod", equal(5.0292, meter));

// Imperial area units

export type Perch = ConversionUnit<"Perch", Equal<25.29285264, SquareMeter>>;
export const perch: Perch = conversionUnit("Perch", equal(25.29285264, squareMeter));

export type Rood = ConversionUnit<"Rood", Equal<1011.7141056, SquareMeter>>;
export const rood: Rood = conversionUnit("Rood", equal(1011.7141056, squareMeter));

export type Acre = ConversionUnit<"Acre", Equal<4046.8564224, SquareMeter>>;
export const acre: Acre = conversionUnit("Acre", equal(4046.8564224, squareMeter));

export type SquareMile = ConversionUnit<"SquareMile", Equal<2589988.110336, SquareMeter>>;
export const squareMile: SquareMile = conversionUnit(
  "SquareMile",
  equal(2589988.110336, squareMeter)
);
