import { dimension, measurement, unit } from "../core";
import { kilo } from "./helpers";
import { ConversionError, convert } from "./convert";
import {
  celsius,
  centimeter,
  hertz,
  kelvin,
  kilometer,
  meter,
  minute,
  second,
  squareMeter,
  farenheit,
  hour,
  liter,
} from "./physics";
import { cubicMeter } from ".";

describe("convert", () => {
  test("identical unit", () => {
    expect(convert(meter, meter)).toBe(1); // SimpleUnit
    expect(convert(hertz, hertz)).toBe(1); // ComposedUnit
    expect(convert(kilometer, kilometer)).toBe(1); // ConversionUnit
  });

  test("matching dimension", () => {
    // Simple to derived and vice versa
    expect(convert(meter, kilometer)).toBe(0.001);
    expect(convert(kilometer, meter)).toBe(1000);
    expect(convert(second, minute)).toBe(0.016666666666666666);
    expect(convert(minute, second)).toBe(60);
    // Derived to derived and vice versa
    expect(convert(centimeter, kilometer)).toBe(1 / (100 * 1000));
    expect(convert(kilometer, centimeter)).toBe(100 * 1000);
    // Very derived things
    const existence = dimension("Existence");
    const thing = unit("Thing", existence);
    const megathing = kilo(kilo(thing));
    const gigathing = kilo(kilo(kilo(thing)));
    expect(convert(megathing, gigathing)).toBe(1 / 1000);
    expect(convert(gigathing, megathing)).toBe(1000);
    // temp
    // expect(convert(celsius, kelvin)).toBe(-17.22222222222222);
    // expect(convert(farenheit, celsius)).toBe(1 - 273.15);
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

  test("measurements", () => {
    // Simple to simple
    expect(convert(measurement(1, meter), meter)).toBe(1);
    expect(convert(measurement(0, meter), meter)).toBe(0);
    // Simple to derived
    expect(convert(measurement(0, meter), kilometer)).toBe(0);
    expect(convert(measurement(1000, meter), kilometer)).toBe(1);
    expect(convert(measurement(10 * 1000, meter), kilometer)).toBe(10);
    expect(convert(measurement(90, second), minute)).toBe(1.5);
    expect(convert(measurement(90, minute), hour)).toBe(1.5);
    // Complex
    expect(convert(measurement(1000, liter), cubicMeter)).toBe(1);
  });
});
