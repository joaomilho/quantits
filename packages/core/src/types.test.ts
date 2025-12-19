import { describe, expect, test } from "vitest";
import {
  dimension,
  unit,
  composedUnit,
  conversionUnit,
  measurement,
  baseDimension,
  mul,
  div,
  power,
  dimensionsEqual,
  dimensionless,
  getDimension,
  dimensionsCompatible,
  type Dimension,
  type Unit,
  type ComposedUnit,
  type ConversionUnit,
  type Measurement,
} from "./types.js";

describe("dimension (using NormalizedDimension)", () => {
  test("creates a dimension with correct structure", () => {
    const length = dimension("Length");
    
    expect(length.type).toBe("Dimension");
    expect(length.exponents).toEqual({ Length: 1 });
  });

  test("creates distinct dimensions", () => {
    const length = dimension("Length");
    const time = dimension("Time");
    
    expect(dimensionsEqual(length, time)).toBe(false);
  });

  test("preserves literal type for name", () => {
    const d = dimension("MyCustomDimension");
    // Should have exponent 1 for this dimension
    expect(d.exponents.MyCustomDimension).toBe(1);
  });
});

describe("baseDimension", () => {
  test("creates a normalized dimension with exponent 1", () => {
    const length = baseDimension("Length");
    
    expect(length.type).toBe("Dimension");
    expect(length.exponents).toEqual({ Length: 1 });
  });

  test("is equivalent to dimension()", () => {
    const via1 = dimension("Time");
    const via2 = baseDimension("Time");
    
    expect(dimensionsEqual(via1, via2)).toBe(true);
  });
});

describe("unit", () => {
  test("creates a unit with correct structure", () => {
    const length = dimension("Length");
    const meter = unit("Meter", length);
    
    expect(meter.type).toBe("Unit");
    expect(meter.name).toBe("Meter");
    expect(dimensionsEqual(meter.dimension, length)).toBe(true);
  });

  test("associates unit with its dimension", () => {
    const time = dimension("Time");
    const second = unit("Second", time);
    
    expect(second.dimension.exponents).toEqual({ Time: 1 });
  });

  test("creates distinct units for same dimension", () => {
    const length = dimension("Length");
    const meter = unit("Meter", length);
    const foot = unit("Foot", length);
    
    expect(meter.name).not.toBe(foot.name);
    expect(dimensionsEqual(meter.dimension, foot.dimension)).toBe(true);
  });
});

describe("composedUnit", () => {
  test("creates a composed unit with correct structure", () => {
    const length = dimension("Length");
    const time = dimension("Time");
    const meter = unit("Meter", length);
    const second = unit("Second", time);
    
    const speedDim = div(length, time);
    const meterPerSecond = composedUnit("MeterPerSecond", speedDim, [meter, second]);
    
    expect(meterPerSecond.type).toBe("ComposedUnit");
    expect(meterPerSecond.name).toBe("MeterPerSecond");
    expect(dimensionsEqual(meterPerSecond.dimension, speedDim)).toBe(true);
    expect(meterPerSecond.composedUnits).toEqual([meter, second]);
  });

  test("preserves component units order", () => {
    const length = dimension("Length");
    const time = dimension("Time");
    const meter = unit("Meter", length);
    const second = unit("Second", time);
    
    const speedDim = div(length, time);
    const meterPerSecond = composedUnit("MeterPerSecond", speedDim, [meter, second]);
    
    expect(meterPerSecond.composedUnits[0]).toBe(meter);
    expect(meterPerSecond.composedUnits[1]).toBe(second);
  });
});

describe("conversionUnit", () => {
  test("creates a conversion unit with correct structure", () => {
    const length = dimension("Length");
    const meter = unit("Meter", length);
    const conversion = { u: meter, op: "*" as const, n: 1000 };
    const kilometer = conversionUnit("Kilometer", conversion);
    
    expect(kilometer.type).toBe("ConversionUnit");
    expect(kilometer.name).toBe("Kilometer");
    expect(kilometer.conversion).toBe(conversion);
    expect(kilometer.dimension).toBeNull();
  });

  test("supports different operations", () => {
    const temp = dimension("Temperature");
    const kelvin = unit("Kelvin", temp);
    
    const addConversion = { u: kelvin, op: "+" as const, n: 273.15 };
    const celsius = conversionUnit("Celsius", addConversion);
    
    expect(celsius.conversion.op).toBe("+");
    expect(celsius.conversion.n).toBe(273.15);
  });

  test("can chain conversions", () => {
    const length = dimension("Length");
    const meter = unit("Meter", length);
    
    const kmConversion = { u: meter, op: "*" as const, n: 1000 };
    const kilometer = conversionUnit("Kilometer", kmConversion);
    
    const megameterConversion = { u: kilometer, op: "*" as const, n: 1000 };
    const megameter = conversionUnit("Megameter", megameterConversion);
    
    expect(megameter.conversion.u).toBe(kilometer);
    expect(megameter.conversion.n).toBe(1000);
  });
});

describe("measurement", () => {
  test("creates a measurement with correct structure", () => {
    const length = dimension("Length");
    const meter = unit("Meter", length);
    const m = measurement(5, meter);
    
    expect(m.type).toBe("Measurement");
    expect(m.n).toBe(5);
    expect(m.u).toBe(meter);
  });

  test("supports zero values", () => {
    const length = dimension("Length");
    const meter = unit("Meter", length);
    const m = measurement(0, meter);
    
    expect(m.n).toBe(0);
  });

  test("supports negative values", () => {
    const temp = dimension("Temperature");
    const celsius = unit("Celsius", temp);
    const m = measurement(-40, celsius);
    
    expect(m.n).toBe(-40);
  });

  test("supports decimal values", () => {
    const length = dimension("Length");
    const meter = unit("Meter", length);
    const m = measurement(3.14159, meter);
    
    expect(m.n).toBe(3.14159);
  });

  test("supports very large values", () => {
    const length = dimension("Length");
    const meter = unit("Meter", length);
    const m = measurement(1e24, meter);
    
    expect(m.n).toBe(1e24);
  });

  test("supports very small values", () => {
    const length = dimension("Length");
    const meter = unit("Meter", length);
    const m = measurement(1e-24, meter);
    
    expect(m.n).toBe(1e-24);
  });
});

describe("getDimension", () => {
  test("gets dimension from simple unit", () => {
    const length = dimension("Length");
    const meter = unit("Meter", length);
    
    const dim = getDimension(meter);
    expect(dimensionsEqual(dim, length)).toBe(true);
  });

  test("gets dimension from composed unit", () => {
    const length = dimension("Length");
    const time = dimension("Time");
    const meter = unit("Meter", length);
    const second = unit("Second", time);
    
    const speedDim = div(length, time);
    const mps = composedUnit("MPS", speedDim, [meter, second]);
    
    const dim = getDimension(mps);
    expect(dimensionsEqual(dim, speedDim)).toBe(true);
  });

  test("gets dimension from conversion unit (follows chain)", () => {
    const length = dimension("Length");
    const meter = unit("Meter", length);
    const km = conversionUnit("Kilometer", { u: meter, op: "*" as const, n: 1000 });
    
    const dim = getDimension(km);
    expect(dimensionsEqual(dim, length)).toBe(true);
  });
});

describe("dimensionsCompatible", () => {
  test("returns true for same dimension", () => {
    const length = dimension("Length");
    const meter = unit("Meter", length);
    const foot = unit("Foot", length);
    
    expect(dimensionsCompatible(meter, foot)).toBe(true);
  });

  test("returns false for different dimensions", () => {
    const length = dimension("Length");
    const time = dimension("Time");
    const meter = unit("Meter", length);
    const second = unit("Second", time);
    
    expect(dimensionsCompatible(meter, second)).toBe(false);
  });

  test("works with conversion units", () => {
    const length = dimension("Length");
    const meter = unit("Meter", length);
    const km = conversionUnit("Kilometer", { u: meter, op: "*" as const, n: 1000 });
    
    expect(dimensionsCompatible(meter, km)).toBe(true);
  });
});
