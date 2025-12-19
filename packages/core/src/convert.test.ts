import { describe, expect, test } from "vitest";
import { dimension, unit, composedUnit, conversionUnit, measurement, div, power } from "./types.js";
import { kilo, mili, equal, sum, conv } from "./helpers.js";
import { convert, ConversionError } from "./convert.js";

describe("convert - edge cases", () => {
  describe("precision handling", () => {
    test("handles very small numbers", () => {
      const length = dimension("Length");
      const meter = unit("Meter", length);
      const nanometer = conversionUnit("Nanometer", equal(1e-9, meter));
      
      const result = convert(nanometer, meter);
      expect(result.numberValue()).toBeCloseTo(1e-9);
    });

    test("handles very large numbers", () => {
      const length = dimension("Length");
      const meter = unit("Meter", length);
      const lightYear = conversionUnit("LightYear", equal(9.461e15, meter));
      
      const result = convert(lightYear, meter);
      expect(result.numberValue()).toBeCloseTo(9.461e15);
    });

    test("maintains precision with BigDecimal", () => {
      const length = dimension("Length");
      const meter = unit("Meter", length);
      const km = kilo(meter);
      
      // 1/3 of a kilometer in meters should be precise
      const result = convert(measurement(1, km), meter);
      expect(result.toString()).toBe("1000");
    });

    test("handles repeating decimals", () => {
      const time = dimension("Time");
      const second = unit("Second", time);
      const minute = conversionUnit("Minute", equal(60, second));
      
      // 1 second = 1/60 minutes = 0.01666...
      const result = convert(second, minute);
      expect(result.numberValue()).toBeCloseTo(1/60);
    });
  });

  describe("zero values", () => {
    test("converts zero correctly", () => {
      const length = dimension("Length");
      const meter = unit("Meter", length);
      const km = kilo(meter);
      
      const result = convert(measurement(0, meter), km);
      expect(result.numberValue()).toBe(0);
    });

    test("zero in temperature with offset", () => {
      const temp = dimension("Temperature");
      const kelvin = unit("Kelvin", temp);
      const celsius = conversionUnit("Celsius", sum(kelvin, 273.15));
      
      // 0 Celsius = 273.15 Kelvin
      const result = convert(measurement(0, celsius), kelvin);
      expect(result.numberValue()).toBeCloseTo(273.15);
    });
  });

  describe("negative values", () => {
    test("converts negative measurements", () => {
      const temp = dimension("Temperature");
      const kelvin = unit("Kelvin", temp);
      const celsius = conversionUnit("Celsius", sum(kelvin, 273.15));
      
      // -40 Celsius = 233.15 Kelvin
      const result = convert(measurement(-40, celsius), kelvin);
      expect(result.numberValue()).toBeCloseTo(233.15);
    });
  });

  describe("identity conversions", () => {
    test("converting unit to itself returns 1", () => {
      const length = dimension("Length");
      const meter = unit("Meter", length);
      
      expect(convert(meter, meter).numberValue()).toBe(1);
    });

    test("converting derived unit to itself returns 1", () => {
      const length = dimension("Length");
      const meter = unit("Meter", length);
      const km = kilo(meter);
      
      expect(convert(km, km).numberValue()).toBe(1);
    });

    test("converting composed unit to itself returns 1", () => {
      const length = dimension("Length");
      const time = dimension("Time");
      const meter = unit("Meter", length);
      const second = unit("Second", time);
      const speedDim = div(length, time);
      const mps = composedUnit("MeterPerSecond", speedDim, [meter, second]);
      
      expect(convert(mps, mps).numberValue()).toBe(1);
    });
  });

  describe("deep conversion chains", () => {
    test("handles 5+ levels of conversion", () => {
      const length = dimension("Length");
      const meter = unit("Meter", length);
      const km = kilo(meter);
      const Mm = kilo(km);
      const Gm = kilo(Mm);
      const Tm = kilo(Gm);
      const Pm = kilo(Tm);
      
      // 1 Pm = 10^15 meters
      expect(convert(Pm, meter).numberValue()).toBe(1e15);
      expect(convert(meter, Pm).numberValue()).toBe(1e-15);
    });
  });

  describe("error handling", () => {
    test("throws ConversionError for incompatible simple units", () => {
      const length = dimension("Length");
      const time = dimension("Time");
      const meter = unit("Meter", length);
      const second = unit("Second", time);
      
      expect(() => convert(meter, second)).toThrow(ConversionError);
    });

    test("throws ConversionError for incompatible derived units", () => {
      const length = dimension("Length");
      const time = dimension("Time");
      const meter = unit("Meter", length);
      const second = unit("Second", time);
      const km = kilo(meter);
      const minute = conversionUnit("Minute", equal(60, second));
      
      expect(() => convert(km, minute)).toThrow(ConversionError);
    });

    test("throws ConversionError for simple to composed", () => {
      const length = dimension("Length");
      const meter = unit("Meter", length);
      const areaDim = power(length, 2);
      const sqMeter = composedUnit("SquareMeter", areaDim, [meter]);
      
      expect(() => convert(meter, sqMeter)).toThrow(ConversionError);
    });

    test("error message includes unit names", () => {
      const length = dimension("Length");
      const time = dimension("Time");
      const meter = unit("Meter", length);
      const second = unit("Second", time);
      
      try {
        convert(meter, second);
        expect.fail("Should have thrown");
      } catch (e) {
        expect(e instanceof ConversionError).toBe(true);
        expect((e as Error).message).toContain("Meter");
        expect((e as Error).message).toContain("Second");
      }
    });
  });

  describe("composed unit conversions", () => {
    test("converts speed units correctly", () => {
      const length = dimension("Length");
      const time = dimension("Time");
      const meter = unit("Meter", length);
      const second = unit("Second", time);
      const km = kilo(meter);
      const hour = conversionUnit("Hour", equal(3600, second));
      
      const speedDim = div(length, time);
      const mps = composedUnit("MeterPerSecond", speedDim, [meter, second]);
      const kmph = composedUnit("KilometerPerHour", speedDim, [km, hour]);
      
      // 1 m/s = 3.6 km/h
      expect(convert(mps, kmph).numberValue()).toBeCloseTo(3.6);
      // 1 km/h = 0.2778 m/s
      expect(convert(kmph, mps).numberValue()).toBeCloseTo(0.2778, 3);
    });

    test("converts area units correctly", () => {
      const length = dimension("Length");
      const meter = unit("Meter", length);
      const cm = conversionUnit("Centimeter", equal(0.01, meter));
      
      const areaDim = power(length, 2);
      const sqMeter = composedUnit("SquareMeter", areaDim, [meter]);
      const sqCm = composedUnit("SquareCentimeter", areaDim, [cm]);
      
      // 1 m² = 10000 cm²
      expect(convert(sqMeter, sqCm).numberValue()).toBeCloseTo(10000);
      // 1 cm² = 0.0001 m²
      expect(convert(sqCm, sqMeter).numberValue()).toBeCloseTo(0.0001);
    });

    test("converts volume units correctly", () => {
      const length = dimension("Length");
      const meter = unit("Meter", length);
      const cm = conversionUnit("Centimeter", equal(0.01, meter));
      
      const volumeDim = power(length, 3);
      const cubicMeter = composedUnit("CubicMeter", volumeDim, [meter]);
      const cubicCm = composedUnit("CubicCentimeter", volumeDim, [cm]);
      
      // 1 m³ = 1000000 cm³
      expect(convert(cubicMeter, cubicCm).numberValue()).toBeCloseTo(1000000);
    });
  });

  describe("conv helper conversions", () => {
    test("two-step conversion works correctly", () => {
      const temp = dimension("Temperature");
      const kelvin = unit("Kelvin", temp);
      
      // Celsius = Kelvin - 273.15
      const celsius = conv("Celsius", kelvin, ["+", 273.15] as const);
      
      // 0°C = 273.15K
      expect(convert(measurement(0, celsius), kelvin).numberValue()).toBeCloseTo(273.15);
      // 100°C = 373.15K
      expect(convert(measurement(100, celsius), kelvin).numberValue()).toBeCloseTo(373.15);
    });

    test("four-step conversion (Fahrenheit) works correctly", () => {
      const temp = dimension("Temperature");
      const kelvin = unit("Kelvin", temp);
      
      // Fahrenheit to Kelvin: (F - 32) * 5 / 9 + 273.15
      const fahrenheit = conv(
        "Fahrenheit",
        kelvin,
        ["-", 32] as const,
        ["*", 5] as const,
        ["/", 9] as const,
        ["+", 273.15] as const
      );
      
      // 32°F = 273.15K (freezing point)
      expect(convert(measurement(32, fahrenheit), kelvin).numberValue()).toBeCloseTo(273.15);
      // 212°F = 373.15K (boiling point)
      expect(convert(measurement(212, fahrenheit), kelvin).numberValue()).toBeCloseTo(373.15);
      // -40°F = -40°C = 233.15K
      expect(convert(measurement(-40, fahrenheit), kelvin).numberValue()).toBeCloseTo(233.15);
    });
  });

  describe("bidirectional conversions", () => {
    test("A to B to A returns original", () => {
      const length = dimension("Length");
      const meter = unit("Meter", length);
      const km = kilo(meter);
      
      const toKm = convert(measurement(1234, meter), km).numberValue();
      const backToMeter = convert(measurement(toKm, km), meter).numberValue();
      
      expect(backToMeter).toBeCloseTo(1234);
    });

    test("composed units round-trip correctly", () => {
      const length = dimension("Length");
      const time = dimension("Time");
      const meter = unit("Meter", length);
      const second = unit("Second", time);
      const km = kilo(meter);
      const hour = conversionUnit("Hour", equal(3600, second));
      
      const speedDim = div(length, time);
      const mps = composedUnit("MeterPerSecond", speedDim, [meter, second]);
      const kmph = composedUnit("KilometerPerHour", speedDim, [km, hour]);
      
      // Verify base conversion: 1 m/s = 3.6 km/h
      expect(convert(mps, kmph).numberValue()).toBeCloseTo(3.6);
      
      // Verify inverse: 1 km/h = 0.2778 m/s
      expect(convert(kmph, mps).numberValue()).toBeCloseTo(0.2778, 3);
      
      // The product of conversions should be ~1
      const forward = convert(mps, kmph).numberValue();
      const backward = convert(kmph, mps).numberValue();
      expect(forward * backward).toBeCloseTo(1);
    });
  });
});
