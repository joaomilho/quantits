import { composedUnit, dimension, measurement, unit } from "../core";
import { kilo, mega } from "./helpers";
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
  fahrenheit,
  hour,
  liter,
  coulomb,
  ampere,
} from "./physics";
import { cubicMeter, kilometerPerHour, meterPerSecond, milisecond } from ".";
import Decimal from "decimal.js";
import { electricCharge } from "..";
import {
  barleycorn,
  chain,
  feet,
  hand,
  inch,
  league,
  mile,
  thou,
  twip,
  yard,
} from "./imperial";

describe("convert", () => {
  test("identical unit", () => {
    expect(convert(meter, meter).toNumber()).toBe(1); // SimpleUnit
    expect(convert(hertz, hertz).toNumber()).toBe(1); // ComposedUnit
    expect(convert(kilometer, kilometer).toNumber()).toBe(1); // ConversionUnit
  });

  test("matching dimension", () => {
    // Simple to derived and vice versa
    expect(convert(meter, kilometer).toNumber()).toBe(0.001);
    expect(convert(kilometer, meter).toNumber()).toBe(1000);
    expect(convert(second, minute).toNumber()).toBe(0.016666666666666666);
    expect(convert(minute, second).toNumber()).toBe(60);
    // Derived to derived and vice versa
    expect(convert(centimeter, kilometer).toNumber()).toBe(1 / (100 * 1000));
    expect(convert(kilometer, centimeter).toNumber()).toBe(100 * 1000);
    // Very derived things
    const existence = dimension("Existence");
    const thing = unit("Thing", existence);
    const megathing = kilo(kilo(thing));
    const gigathing = kilo(kilo(kilo(thing)));
    expect(convert(megathing, gigathing).toNumber()).toBe(1 / 1000);
    expect(convert(gigathing, megathing).toNumber()).toBe(1000);
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
    expect(convert(measurement(1, meter), meter).toNumber()).toBe(1);
    expect(convert(measurement(0, meter), meter).toNumber()).toBe(0);
    // Simple to derived
    expect(convert(measurement(0, meter), kilometer).toNumber()).toBe(0);
    expect(convert(measurement(1000, meter), kilometer).toNumber()).toBe(1);
    expect(convert(measurement(10 * 1000, meter), kilometer).toNumber()).toBe(
      10
    );
    expect(convert(measurement(90, second), minute).toNumber()).toBe(1.5);
    expect(convert(measurement(90, minute), hour).toNumber()).toBe(1.5);
    // Complex
    expect(convert(measurement(1000, liter), cubicMeter).toNumber()).toBe(1);
  });

  test("fahrenheit", () => {
    // With normal JS numbers this would return 73.1499999999 :(
    expect(convert(measurement(0, fahrenheit), kelvin)).toEqual(
      new Decimal(0).sub(32).mul(5).div(9).add(273.15)
    );

    expect(
      convert(measurement(100, fahrenheit), fahrenheit).toNumber()
    ).toEqual(100);

    expect(convert(measurement(100, fahrenheit), celsius).toNumber()).toEqual(
      37.77777777777778
    );
  });

  test("composed", () => {
    expect(convert(meter, kilometer).toNumber()).toEqual(0.001);
    expect(convert(second, hour).toNumber()).toEqual(0.00027777777777777777778);

    expect(convert(meterPerSecond, kilometerPerHour).toNumber()).toEqual(3.6);

    expect(convert(kilometerPerHour, meterPerSecond).toNumber()).toEqual(
      0.2777777777777778
    );
  });

  test("coulomb", () => {
    // // coulomb is composed but by multiplying 1s x  1amp
    expect(convert(coulomb, coulomb).toNumber()).toEqual(1);
    expect(convert(measurement(100, coulomb), coulomb).toNumber()).toEqual(100);

    const weirdCoulomb1 = composedUnit("weirdCoulomb1", electricCharge, [
      minute,
      ampere,
    ]);

    expect(convert(weirdCoulomb1, coulomb).toNumber()).toEqual(60);
    expect(convert(coulomb, weirdCoulomb1).toNumber()).toEqual(1 / 60);

    const weirdCoulomb2 = composedUnit("weirdCoulomb2", electricCharge, [
      milisecond,
      ampere,
    ]);

    expect(convert(weirdCoulomb2, coulomb).toNumber()).toEqual(0.001);
    expect(convert(coulomb, weirdCoulomb2).toNumber()).toEqual(1000);

    const kiloampere = kilo(ampere);
    const weirdCoulomb3 = composedUnit("weirdCoulomb3", electricCharge, [
      milisecond,
      kiloampere,
    ]);

    expect(convert(weirdCoulomb3, coulomb).toNumber()).toEqual(1);
    expect(convert(coulomb, weirdCoulomb3).toNumber()).toEqual(1);
  });

  test("imperial", () => {
    expect(convert(yard, feet).toNumber()).toEqual(3);
    expect(convert(chain, yard).toNumber()).toEqual(22);
    expect(convert(chain, feet).toNumber()).toEqual(66);
    expect(convert(mile, feet).toNumber()).toEqual(5280);
    expect(convert(league, mile).toNumber()).toEqual(3);

    expect(convert(feet, hand).toNumber()).toEqual(3);
    expect(convert(feet, inch).toNumber()).toEqual(12);
    expect(convert(feet, barleycorn).toNumber()).toEqual(36);
    expect(convert(feet, thou).toNumber()).toEqual(12000);
    expect(convert(feet, twip).toNumber()).toEqual(17280);
    // expect(convert(measurement(100, coulomb), coulomb).toNumber()).toEqual(100);
  });
});
