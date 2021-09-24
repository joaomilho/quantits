import { squareMeter } from ".";
import { dimension } from "../core";
import { kilo } from "./conversionUnit";
import { ConversionError, convert } from "./convert";
import { centimeter, hertz, kilometer, meter, minute, second } from "./physics";
import { unit } from "./unit";

describe("convert", () => {
  test("identical unit", () => {
    expect(convert(meter, meter)).toBe(1); // SimpleUnit
    expect(convert(hertz, hertz)).toBe(1); // ComposedUnit
    expect(convert(kilometer, kilometer)).toBe(1); // ConversionUnit
  });

  test("matching dimension", () => {
    // Simple to derived and vice versa
    expect(convert(meter, kilometer)).toBe(1000);
    expect(convert(kilometer, meter)).toBe(0.001);

    expect(convert(second, minute)).toBe(60);
    expect(convert(minute, second)).toBe(0.016666666666666666);

    // Derived to derived and vice versa
    expect(convert(centimeter, kilometer)).toBe(100 * 1000);
    expect(convert(kilometer, centimeter)).toBe(1 / (100 * 1000));

    // Very derived things
    const existence = dimension("Existence");
    const thing = unit("Thing", existence);

    const megathing = kilo(kilo(thing));
    const gigathing = kilo(kilo(kilo(thing)));

    expect(convert(megathing, gigathing)).toBe(1000);
    expect(convert(gigathing, megathing)).toBe(1 / 1000);
  });

  test("incompatible dimensions", () => {
    // Simple to simple
    expect(() => convert(meter, second)).toThrowError(ConversionError);
    expect(() => convert(second, meter)).toThrowError(ConversionError);

    // Simple to derived of different dimension
    expect(() => convert(meter, minute)).toThrowError(ConversionError);
    expect(() => convert(minute, meter)).toThrowError(ConversionError);

    // Simple to complex of same dimension
    expect(() => convert(meter, squareMeter)).toThrowError(ConversionError);
    expect(() => convert(squareMeter, meter)).toThrowError(ConversionError);
  });
});
