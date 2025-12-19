import { describe, expect, test } from "vitest";
import { dimension, unit, composedUnit, conversionUnit, dimensionsEqual } from "./types.js";
import { multiply, divide, pow } from "./dimension-helpers.js";
import { convert, ConversionError } from "./convert.js";
import { baseDimension, dimensionless, mul, div, power } from "./dimension-algebra.js";

describe("multiply (legacy wrapper)", () => {
  test("creates multiplication of two dimensions", () => {
    const length = dimension("Length");
    const time = dimension("Time");
    
    const result = multiply(length, time);
    
    expect(result.type).toBe("Dimension");
    expect(result.exponents).toEqual({ Length: 1, Time: 1 });
  });

  test("Length × Length = Length² (normalized)", () => {
    const length = dimension("Length");
    const areaComposition = multiply(length, length);
    
    expect(areaComposition.exponents).toEqual({ Length: 2 });
  });

  test("can combine different dimensions", () => {
    const mass = dimension("Mass");
    const acceleration = dimension("Acceleration");
    
    const forceComposition = multiply(mass, acceleration);
    
    expect(forceComposition.exponents).toEqual({ Acceleration: 1, Mass: 1 });
  });

  test("can chain multiplications", () => {
    const length = dimension("Length");
    const time = dimension("Time");
    const mass = dimension("Mass");
    
    // Create Length × Time first
    const lt = multiply(length, time);
    
    // Then multiply by mass
    const ltm = multiply(lt, mass);
    
    expect(ltm.exponents).toEqual({ Length: 1, Mass: 1, Time: 1 });
  });
});

describe("divide (legacy wrapper)", () => {
  test("creates division of two dimensions", () => {
    const length = dimension("Length");
    const time = dimension("Time");
    
    const result = divide(length, time);
    
    expect(result.type).toBe("Dimension");
    expect(result.exponents).toEqual({ Length: 1, Time: -1 });
  });

  test("can be used to create speed (Length / Time)", () => {
    const length = dimension("Length");
    const time = dimension("Time");
    const speedComposition = divide(length, time);
    
    expect(speedComposition.exponents).toEqual({ Length: 1, Time: -1 });
  });

  test("can be used to create acceleration (Speed / Time)", () => {
    const length = dimension("Length");
    const time = dimension("Time");
    
    const speed = divide(length, time);
    const acceleration = divide(speed, time);
    
    expect(acceleration.exponents).toEqual({ Length: 1, Time: -2 });
  });

  test("can create inverse dimensions", () => {
    const time = dimension("Time");
    const one = dimension("One");
    
    // Frequency = 1 / Time
    const frequencyComp = divide(one, time);
    
    expect(frequencyComp.exponents).toEqual({ One: 1, Time: -1 });
  });
});

describe("pow (legacy wrapper)", () => {
  test("creates power of dimension", () => {
    const length = dimension("Length");
    
    const result = pow(length, 2);
    
    expect(result.type).toBe("Dimension");
    expect(result.exponents).toEqual({ Length: 2 });
  });

  test("can create area (Length²)", () => {
    const length = dimension("Length");
    const areaComposition = pow(length, 2);
    
    expect(areaComposition.exponents).toEqual({ Length: 2 });
  });

  test("can create volume (Length³)", () => {
    const length = dimension("Length");
    const volumeComposition = pow(length, 3);
    
    expect(volumeComposition.exponents).toEqual({ Length: 3 });
  });

  test("can create hypervolume (Length⁴)", () => {
    const length = dimension("Length");
    const hyperVolumeComp = pow(length, 4);
    
    expect(hyperVolumeComp.exponents).toEqual({ Length: 4 });
  });

  test("can create frequency (Time⁻¹)", () => {
    const time = dimension("Time");
    const frequencyComp = pow(time, -1);
    
    expect(frequencyComp.exponents).toEqual({ Time: -1 });
  });

  test("can create wavenumber (Length⁻¹)", () => {
    const length = dimension("Length");
    const wavenumberComp = pow(length, -1);
    
    expect(wavenumberComp.exponents).toEqual({ Length: -1 });
  });

  test("supports fractional exponents", () => {
    const length = dimension("Length");
    // Square root would be Length^0.5
    const sqrtLength = pow(length, 0.5);
    
    expect(sqrtLength.exponents).toEqual({ Length: 0.5 });
  });
});

describe("multiply vs pow equivalence", () => {
  test("multiply(L, L) normalizes to same as pow(L, 2)", () => {
    const length = dimension("Length");
    
    const areaMult = multiply(length, length);
    const areaPow = pow(length, 2);
    
    expect(dimensionsEqual(areaMult, areaPow)).toBe(true);
    expect(areaMult.exponents).toEqual(areaPow.exponents);
  });

  test("multiply(L, L) and pow(L, 2) are structurally identical", () => {
    const length = dimension("Length");
    
    const areaMult = multiply(length, length);
    const areaPow = pow(length, 2);
    
    expect(areaMult.exponents).toEqual(areaPow.exponents);
  });

  test("multiply(L, T) stays as combined exponents (different dimensions)", () => {
    const length = dimension("Length");
    const time = dimension("Time");
    
    const result = multiply(length, time);
    
    expect(result.exponents).toEqual({ Length: 1, Time: 1 });
  });

  test("dimensions using normalized multiply work correctly", () => {
    const length = dimension("Length");
    const meter = unit("Meter", length);
    const cm = conversionUnit("Centimeter", { u: meter, op: "*" as const, n: 0.01 });
    
    // Create area using multiply(L, L) - which normalizes
    const area = multiply(length, length);
    
    // composedUnits should only need ONE unit for power-based dimensions
    const sqMeter = composedUnit("SquareMeter", area, [meter]);
    const sqCm = composedUnit("SquareCentimeter", area, [cm]);
    
    // 1 m² = 10000 cm²
    expect(convert(sqMeter, sqCm).numberValue()).toBeCloseTo(10000);
  });
});

describe("combined operations", () => {
  test("can build complex quantities", () => {
    const mass = dimension("Mass");
    const length = dimension("Length");
    const time = dimension("Time");
    
    // Velocity = Length / Time
    const velocity = divide(length, time);
    
    // Momentum = Mass × Velocity
    const momentum = multiply(mass, velocity);
    
    expect(momentum.exponents).toEqual({ Length: 1, Mass: 1, Time: -1 });
  });

  test("can build energy dimension", () => {
    const mass = dimension("Mass");
    const length = dimension("Length");
    const time = dimension("Time");
    
    // Velocity = Length / Time
    const velocity = divide(length, time);
    
    // Acceleration = Velocity / Time
    const acceleration = divide(velocity, time);
    
    // Force = Mass × Acceleration
    const force = multiply(mass, acceleration);
    
    // Energy = Force × Length
    const energy = multiply(force, length);
    
    expect(energy.exponents).toEqual({ Length: 2, Mass: 1, Time: -2 });
  });
});

describe("equivalencies with new algebra", () => {
  test("multiply(L, L) === power(L, 2)", () => {
    const L = baseDimension("Length");
    
    const viaMul = mul(L, L);
    const viaPow = power(L, 2);
    
    expect(dimensionsEqual(viaMul, viaPow)).toBe(true);
  });

  test("divide(L, T) === multiply(L, power(T, -1))", () => {
    const L = baseDimension("Length");
    const T = baseDimension("Time");
    
    const viaDiv = div(L, T);
    const viaMul = mul(L, power(T, -1));
    
    expect(dimensionsEqual(viaDiv, viaMul)).toBe(true);
  });

  test("divide(L, L) === dimensionless", () => {
    const L = baseDimension("Length");
    
    const result = div(L, L);
    
    expect(dimensionsEqual(result, dimensionless)).toBe(true);
  });
});
