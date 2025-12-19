import { describe, expect, test } from "vitest";
import {
  baseDimension,
  dimensionless,
  isDimensionless,
  mul,
  div,
  power,
  invert,
  dimensionsEqual,
  dimensionToString,
  composeDimension,
} from "./dimension-algebra.js";

describe("baseDimension", () => {
  test("creates a dimension with exponent 1", () => {
    const length = baseDimension("Length");
    
    expect(length.type).toBe("Dimension");
    expect(length.exponents).toEqual({ Length: 1 });
  });

  test("preserves literal type for name", () => {
    const time = baseDimension("Time");
    expect(time.exponents.Time).toBe(1);
  });
});

describe("dimensionless", () => {
  test("has empty exponents", () => {
    expect(dimensionless.exponents).toEqual({});
  });

  test("isDimensionless returns true", () => {
    expect(isDimensionless(dimensionless)).toBe(true);
  });

  test("isDimensionless returns false for base dimensions", () => {
    const length = baseDimension("Length");
    expect(isDimensionless(length)).toBe(false);
  });
});

describe("mul (multiply)", () => {
  test("Length × Time = { Length: 1, Time: 1 }", () => {
    const length = baseDimension("Length");
    const time = baseDimension("Time");
    
    const result = mul(length, time);
    
    expect(result.exponents).toEqual({ Length: 1, Time: 1 });
  });

  test("Length × Length = { Length: 2 } (auto-combines same dimension)", () => {
    const length = baseDimension("Length");
    
    const result = mul(length, length);
    
    expect(result.exponents).toEqual({ Length: 2 });
  });

  test("(Length × Length) × Length = { Length: 3 }", () => {
    const length = baseDimension("Length");
    
    const area = mul(length, length);
    const volume = mul(area, length);
    
    expect(volume.exponents).toEqual({ Length: 3 });
  });

  test("Length × (Length × Length) = { Length: 3 }", () => {
    const length = baseDimension("Length");
    
    const area = mul(length, length);
    const volume = mul(length, area);
    
    expect(volume.exponents).toEqual({ Length: 3 });
  });

  test("multiplying by dimensionless returns same dimension", () => {
    const length = baseDimension("Length");
    
    const result = mul(length, dimensionless);
    
    expect(result.exponents).toEqual({ Length: 1 });
  });

  test("complex multiplication: (L×T) × (M×L) = { Length: 2, Mass: 1, Time: 1 }", () => {
    const length = baseDimension("Length");
    const time = baseDimension("Time");
    const mass = baseDimension("Mass");
    
    const lt = mul(length, time);
    const ml = mul(mass, length);
    const result = mul(lt, ml);
    
    expect(result.exponents).toEqual({ Length: 2, Mass: 1, Time: 1 });
  });
});

describe("div (divide)", () => {
  test("Length / Time = { Length: 1, Time: -1 } (speed)", () => {
    const length = baseDimension("Length");
    const time = baseDimension("Time");
    
    const speed = div(length, time);
    
    expect(speed.exponents).toEqual({ Length: 1, Time: -1 });
  });

  test("Length / Length = {} (dimensionless)", () => {
    const length = baseDimension("Length");
    
    const result = div(length, length);
    
    expect(result.exponents).toEqual({});
    expect(isDimensionless(result)).toBe(true);
  });

  test("(Length / Time) / Time = { Length: 1, Time: -2 } (acceleration)", () => {
    const length = baseDimension("Length");
    const time = baseDimension("Time");
    
    const speed = div(length, time);
    const acceleration = div(speed, time);
    
    expect(acceleration.exponents).toEqual({ Length: 1, Time: -2 });
  });

  test("Length² / Length = { Length: 1 }", () => {
    const length = baseDimension("Length");
    const area = mul(length, length);
    
    const result = div(area, length);
    
    expect(result.exponents).toEqual({ Length: 1 });
  });

  test("dividing by dimensionless returns same dimension", () => {
    const length = baseDimension("Length");
    
    const result = div(length, dimensionless);
    
    expect(result.exponents).toEqual({ Length: 1 });
  });
});

describe("power", () => {
  test("Length² = { Length: 2 }", () => {
    const length = baseDimension("Length");
    
    const area = power(length, 2);
    
    expect(area.exponents).toEqual({ Length: 2 });
  });

  test("Length³ = { Length: 3 }", () => {
    const length = baseDimension("Length");
    
    const volume = power(length, 3);
    
    expect(volume.exponents).toEqual({ Length: 3 });
  });

  test("Time⁻¹ = { Time: -1 } (frequency)", () => {
    const time = baseDimension("Time");
    
    const frequency = power(time, -1);
    
    expect(frequency.exponents).toEqual({ Time: -1 });
  });

  test("Length⁰ = {} (dimensionless)", () => {
    const length = baseDimension("Length");
    
    const result = power(length, 0);
    
    expect(result.exponents).toEqual({});
    expect(isDimensionless(result)).toBe(true);
  });

  test("(Length × Time)² = { Length: 2, Time: 2 }", () => {
    const length = baseDimension("Length");
    const time = baseDimension("Time");
    
    const lt = mul(length, time);
    const result = power(lt, 2);
    
    expect(result.exponents).toEqual({ Length: 2, Time: 2 });
  });

  test("(Length / Time)² = { Length: 2, Time: -2 }", () => {
    const length = baseDimension("Length");
    const time = baseDimension("Time");
    
    const speed = div(length, time);
    const result = power(speed, 2);
    
    expect(result.exponents).toEqual({ Length: 2, Time: -2 });
  });

  test("(Length²)³ = { Length: 6 }", () => {
    const length = baseDimension("Length");
    
    const area = power(length, 2);
    const result = power(area, 3);
    
    expect(result.exponents).toEqual({ Length: 6 });
  });
});

describe("invert", () => {
  test("1/Time = { Time: -1 }", () => {
    const time = baseDimension("Time");
    
    const result = invert(time);
    
    expect(result.exponents).toEqual({ Time: -1 });
  });

  test("1/(Length × Time) = { Length: -1, Time: -1 }", () => {
    const length = baseDimension("Length");
    const time = baseDimension("Time");
    
    const lt = mul(length, time);
    const result = invert(lt);
    
    expect(result.exponents).toEqual({ Length: -1, Time: -1 });
  });

  test("1/(1/Time) = { Time: 1 } (double invert)", () => {
    const time = baseDimension("Time");
    
    const invTime = invert(time);
    const result = invert(invTime);
    
    expect(result.exponents).toEqual({ Time: 1 });
  });
});

describe("equivalencies - the key tests!", () => {
  test("multiply(L, L) === power(L, 2)", () => {
    const length = baseDimension("Length");
    
    const viaMultiply = mul(length, length);
    const viaPower = power(length, 2);
    
    expect(dimensionsEqual(viaMultiply, viaPower)).toBe(true);
    expect(viaMultiply.exponents).toEqual(viaPower.exponents);
  });

  test("multiply(multiply(L, L), L) === power(L, 3)", () => {
    const length = baseDimension("Length");
    
    const viaMultiply = mul(mul(length, length), length);
    const viaPower = power(length, 3);
    
    expect(dimensionsEqual(viaMultiply, viaPower)).toBe(true);
  });

  test("multiply(L, power(L, 2)) === power(L, 3)", () => {
    const length = baseDimension("Length");
    
    const viaMixed = mul(length, power(length, 2));
    const viaPower = power(length, 3);
    
    expect(dimensionsEqual(viaMixed, viaPower)).toBe(true);
  });

  test("multiply(power(L, 2), power(L, 3)) === power(L, 5)", () => {
    const length = baseDimension("Length");
    
    const viaMul = mul(power(length, 2), power(length, 3));
    const viaPow = power(length, 5);
    
    expect(dimensionsEqual(viaMul, viaPow)).toBe(true);
  });

  test("divide(power(L, 3), power(L, 2)) === L", () => {
    const length = baseDimension("Length");
    
    const viaDiv = div(power(length, 3), power(length, 2));
    
    expect(dimensionsEqual(viaDiv, length)).toBe(true);
  });

  test("divide(L, T) === multiply(L, power(T, -1))", () => {
    const length = baseDimension("Length");
    const time = baseDimension("Time");
    
    const viaDiv = div(length, time);
    const viaMul = mul(length, power(time, -1));
    
    expect(dimensionsEqual(viaDiv, viaMul)).toBe(true);
  });

  test("power(power(L, 2), 3) === power(L, 6)", () => {
    const length = baseDimension("Length");
    
    const viaNested = power(power(length, 2), 3);
    const viaFlat = power(length, 6);
    
    expect(dimensionsEqual(viaNested, viaFlat)).toBe(true);
  });

  test("divide(L, L) === dimensionless", () => {
    const length = baseDimension("Length");
    
    const result = div(length, length);
    
    expect(dimensionsEqual(result, dimensionless)).toBe(true);
  });

  test("multiply(L, invert(L)) === dimensionless", () => {
    const length = baseDimension("Length");
    
    const result = mul(length, invert(length));
    
    expect(dimensionsEqual(result, dimensionless)).toBe(true);
  });

  test("commutativity: multiply(L, T) === multiply(T, L)", () => {
    const length = baseDimension("Length");
    const time = baseDimension("Time");
    
    const lt = mul(length, time);
    const tl = mul(time, length);
    
    expect(dimensionsEqual(lt, tl)).toBe(true);
  });
});

describe("dimensionsEqual", () => {
  test("same dimensions are equal", () => {
    const length = baseDimension("Length");
    
    expect(dimensionsEqual(length, length)).toBe(true);
  });

  test("different dimensions are not equal", () => {
    const length = baseDimension("Length");
    const time = baseDimension("Time");
    
    expect(dimensionsEqual(length, time)).toBe(false);
  });

  test("equivalent constructions are equal", () => {
    const length = baseDimension("Length");
    
    const area1 = mul(length, length);
    const area2 = power(length, 2);
    
    expect(dimensionsEqual(area1, area2)).toBe(true);
  });
});

describe("dimensionToString", () => {
  test("base dimension", () => {
    const length = baseDimension("Length");
    expect(dimensionToString(length)).toBe("Length");
  });

  test("squared dimension", () => {
    const length = baseDimension("Length");
    const area = power(length, 2);
    expect(dimensionToString(area)).toBe("Length²");
  });

  test("negative exponent", () => {
    const time = baseDimension("Time");
    const frequency = power(time, -1);
    expect(dimensionToString(frequency)).toBe("Time⁻¹");
  });

  test("composed dimension (speed)", () => {
    const length = baseDimension("Length");
    const time = baseDimension("Time");
    const speed = div(length, time);
    expect(dimensionToString(speed)).toBe("Length × Time⁻¹");
  });

  test("dimensionless", () => {
    expect(dimensionToString(dimensionless)).toBe("1");
  });

  test("complex dimension (energy = M×L²×T⁻²)", () => {
    const mass = baseDimension("Mass");
    const length = baseDimension("Length");
    const time = baseDimension("Time");
    
    const energy = mul(mul(mass, power(length, 2)), power(time, -2));
    
    expect(dimensionToString(energy)).toBe("Length² × Mass × Time⁻²");
  });
});

describe("composeDimension", () => {
  test("creates dimension from explicit exponents", () => {
    const speed = composeDimension({ Length: 1, Time: -1 });
    
    expect(speed.exponents).toEqual({ Length: 1, Time: -1 });
  });

  test("normalizes zero exponents away", () => {
    const result = composeDimension({ Length: 1, Time: 0, Mass: 2 });
    
    expect(result.exponents).toEqual({ Length: 1, Mass: 2 });
    expect("Time" in result.exponents).toBe(false);
  });
});

describe("real-world physics dimensions", () => {
  const Length = baseDimension("Length");
  const Time = baseDimension("Time");
  const Mass = baseDimension("Mass");
  const Current = baseDimension("Current");
  const Temperature = baseDimension("Temperature");

  test("Speed = Length / Time", () => {
    const speed = div(Length, Time);
    expect(speed.exponents).toEqual({ Length: 1, Time: -1 });
  });

  test("Acceleration = Length / Time²", () => {
    const acceleration = div(Length, power(Time, 2));
    expect(acceleration.exponents).toEqual({ Length: 1, Time: -2 });
  });

  test("Force = Mass × Acceleration = Mass × Length / Time²", () => {
    const acceleration = div(Length, power(Time, 2));
    const force = mul(Mass, acceleration);
    expect(force.exponents).toEqual({ Length: 1, Mass: 1, Time: -2 });
  });

  test("Energy = Force × Length = Mass × Length² / Time²", () => {
    const force = composeDimension({ Mass: 1, Length: 1, Time: -2 });
    const energy = mul(force, Length);
    expect(energy.exponents).toEqual({ Length: 2, Mass: 1, Time: -2 });
  });

  test("Power = Energy / Time = Mass × Length² / Time³", () => {
    const energy = composeDimension({ Mass: 1, Length: 2, Time: -2 });
    const power_ = div(energy, Time);
    expect(power_.exponents).toEqual({ Length: 2, Mass: 1, Time: -3 });
  });

  test("Pressure = Force / Area = Mass / (Length × Time²)", () => {
    const force = composeDimension({ Mass: 1, Length: 1, Time: -2 });
    const area = power(Length, 2);
    const pressure = div(force, area);
    expect(pressure.exponents).toEqual({ Length: -1, Mass: 1, Time: -2 });
  });

  test("Voltage = Power / Current = Mass × Length² / (Current × Time³)", () => {
    const power_ = composeDimension({ Mass: 1, Length: 2, Time: -3 });
    const voltage = div(power_, Current);
    expect(voltage.exponents).toEqual({ Current: -1, Length: 2, Mass: 1, Time: -3 });
  });

  test("Resistance = Voltage / Current = Mass × Length² / (Current² × Time³)", () => {
    const voltage = composeDimension({ Mass: 1, Length: 2, Current: -1, Time: -3 });
    const resistance = div(voltage, Current);
    expect(resistance.exponents).toEqual({ Current: -2, Length: 2, Mass: 1, Time: -3 });
  });
});

