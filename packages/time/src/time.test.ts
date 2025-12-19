import { describe, it, expect } from "vitest";
import { Duration } from "luxon";
import { measurement } from "@quantits/core";
import {
  // Units
  second,
  seconds,
  milisecond,
  miliseconds,
  minute,
  minutes,
  hour,
  hours,
  day,
  days,
  week,
  weeks,
  month,
  months,
  year,
  years,
  
  // Luxon conversion functions
  toLuxonDuration,
  fromLuxonDuration,
  createLuxonDuration,
  
  // ISO 8601 conversion functions
  toISO8601Duration,
  fromISO8601Duration,
  createISO8601Duration,
  
  // ISO 8601 interval functions
  createISO8601Interval,
  createISO8601IntervalFromDuration,
  parseISO8601Interval,
} from "./index.js";

// =============================================================================
// Luxon Duration Conversion Tests
// =============================================================================

describe("toLuxonDuration", () => {
  it("should convert hours to Luxon Duration", () => {
    const m = measurement(2.5, hours);
    const duration = toLuxonDuration(m);
    
    expect(duration.as("hours")).toBeCloseTo(2.5);
    expect(duration.as("minutes")).toBeCloseTo(150);
  });
  
  it("should convert minutes to Luxon Duration", () => {
    const m = measurement(90, minutes);
    const duration = toLuxonDuration(m);
    
    expect(duration.as("hours")).toBeCloseTo(1.5);
    expect(duration.as("minutes")).toBeCloseTo(90);
  });
  
  it("should convert days to Luxon Duration", () => {
    const m = measurement(7, days);
    const duration = toLuxonDuration(m);
    
    expect(duration.as("days")).toBeCloseTo(7);
    expect(duration.as("weeks")).toBeCloseTo(1);
  });
  
  it("should convert milliseconds to Luxon Duration", () => {
    const m = measurement(1500, miliseconds);
    const duration = toLuxonDuration(m);
    
    expect(duration.as("milliseconds")).toBeCloseTo(1500);
    expect(duration.as("seconds")).toBeCloseTo(1.5);
  });
  
  it("should handle zero duration", () => {
    const m = measurement(0, seconds);
    const duration = toLuxonDuration(m);
    
    expect(duration.as("milliseconds")).toBe(0);
  });
});

describe("fromLuxonDuration", () => {
  it("should convert Luxon Duration to hours", () => {
    const duration = Duration.fromObject({ hours: 2, minutes: 30 });
    const m = fromLuxonDuration(duration, hours);
    
    expect(m.n).toBeCloseTo(2.5);
    expect(m.u.name).toBe("Hour");
  });
  
  it("should convert Luxon Duration to seconds", () => {
    const duration = Duration.fromObject({ minutes: 5 });
    const m = fromLuxonDuration(duration, seconds);
    
    expect(m.n).toBeCloseTo(300);
    expect(m.u.name).toBe("Second");
  });
  
  it("should convert Luxon Duration to days", () => {
    const duration = Duration.fromObject({ hours: 48 });
    const m = fromLuxonDuration(duration, days);
    
    expect(m.n).toBeCloseTo(2);
    expect(m.u.name).toBe("Day");
  });
  
  it("should convert Luxon Duration to weeks", () => {
    const duration = Duration.fromObject({ days: 14 });
    const m = fromLuxonDuration(duration, weeks);
    
    expect(m.n).toBeCloseTo(2);
    expect(m.u.name).toBe("Week");
  });
  
  it("should handle complex Luxon Duration", () => {
    const duration = Duration.fromObject({ days: 1, hours: 2, minutes: 30, seconds: 45 });
    const m = fromLuxonDuration(duration, seconds);
    
    // 1 day = 86400s, 2 hours = 7200s, 30 min = 1800s, 45s
    const expected = 86400 + 7200 + 1800 + 45;
    expect(m.n).toBeCloseTo(expected);
  });
});

describe("createLuxonDuration", () => {
  it("should create Luxon Duration from value and unit", () => {
    const duration = createLuxonDuration(3, hours);
    
    expect(duration.as("hours")).toBeCloseTo(3);
    expect(duration.as("minutes")).toBeCloseTo(180);
  });
  
  it("should work with fractional values", () => {
    const duration = createLuxonDuration(1.5, days);
    
    expect(duration.as("days")).toBeCloseTo(1.5);
    expect(duration.as("hours")).toBeCloseTo(36);
  });
});

// =============================================================================
// ISO 8601 Duration Conversion Tests
// =============================================================================

describe("toISO8601Duration", () => {
  it("should convert hours to ISO 8601", () => {
    const m = measurement(2, hours);
    const iso = toISO8601Duration(m);
    
    expect(iso).toBe("PT2H");
  });
  
  it("should convert fractional hours to ISO 8601", () => {
    const m = measurement(2.5, hours);
    const iso = toISO8601Duration(m);
    
    expect(iso).toBe("PT2H30M");
  });
  
  it("should convert days to ISO 8601", () => {
    const m = measurement(5, days);
    const iso = toISO8601Duration(m);
    
    expect(iso).toBe("P5D");
  });
  
  it("should convert complex duration to ISO 8601", () => {
    // 1 day, 2 hours, 30 minutes, 15 seconds
    const totalSeconds = 86400 + 7200 + 1800 + 15;
    const m = measurement(totalSeconds, seconds);
    const iso = toISO8601Duration(m);
    
    expect(iso).toBe("P1DT2H30M15S");
  });
  
  it("should convert years and months to ISO 8601", () => {
    // 1 year (365 days) in seconds
    const yearInSeconds = 365 * 24 * 60 * 60;
    const m = measurement(yearInSeconds, seconds);
    const iso = toISO8601Duration(m);
    
    expect(iso).toBe("P1Y");
  });
  
  it("should handle zero duration", () => {
    const m = measurement(0, seconds);
    const iso = toISO8601Duration(m);
    
    expect(iso).toBe("PT0S");
  });
  
  it("should handle seconds with decimals", () => {
    const m = measurement(90.5, seconds);
    const iso = toISO8601Duration(m);
    
    expect(iso).toBe("PT1M30.5S");
  });
  
  it("should convert minutes to ISO 8601", () => {
    const m = measurement(45, minutes);
    const iso = toISO8601Duration(m);
    
    expect(iso).toBe("PT45M");
  });
  
  it("should convert weeks to ISO 8601", () => {
    const m = measurement(2, weeks);
    const iso = toISO8601Duration(m);
    
    expect(iso).toBe("P14D");
  });
  
  it("should convert months to ISO 8601", () => {
    const m = measurement(2, months);
    const iso = toISO8601Duration(m);
    
    expect(iso).toBe("P2M");
  });
});

describe("fromISO8601Duration", () => {
  it("should parse PT2H to hours", () => {
    const m = fromISO8601Duration("PT2H", hours);
    
    expect(m.n).toBeCloseTo(2);
  });
  
  it("should parse PT2H30M to hours", () => {
    const m = fromISO8601Duration("PT2H30M", hours);
    
    expect(m.n).toBeCloseTo(2.5);
  });
  
  it("should parse P5D to days", () => {
    const m = fromISO8601Duration("P5D", days);
    
    expect(m.n).toBeCloseTo(5);
  });
  
  it("should parse P1DT2H30M15S to seconds", () => {
    const m = fromISO8601Duration("P1DT2H30M15S", seconds);
    
    const expected = 86400 + 7200 + 1800 + 15;
    expect(m.n).toBeCloseTo(expected);
  });
  
  it("should parse P1Y to days", () => {
    const m = fromISO8601Duration("P1Y", days);
    
    expect(m.n).toBeCloseTo(365);
  });
  
  it("should parse P2M to days", () => {
    const m = fromISO8601Duration("P2M", days);
    
    expect(m.n).toBeCloseTo(60); // 2 * 30 days
  });
  
  it("should handle lowercase input", () => {
    const m = fromISO8601Duration("pt2h30m", hours);
    
    expect(m.n).toBeCloseTo(2.5);
  });
  
  it("should parse decimal seconds", () => {
    const m = fromISO8601Duration("PT1M30.5S", seconds);
    
    expect(m.n).toBeCloseTo(90.5);
  });
  
  it("should throw on invalid format", () => {
    expect(() => fromISO8601Duration("2H30M", seconds)).toThrow();
    expect(() => fromISO8601Duration("invalid", seconds)).toThrow();
  });
  
  it("should parse zero duration", () => {
    const m = fromISO8601Duration("PT0S", seconds);
    
    expect(m.n).toBe(0);
  });
  
  it("should handle negative durations", () => {
    const m = fromISO8601Duration("-PT2H", hours);
    
    expect(m.n).toBeCloseTo(-2);
  });
});

describe("createISO8601Duration", () => {
  it("should create ISO 8601 string from value and unit", () => {
    const iso = createISO8601Duration(3, hours);
    
    expect(iso).toBe("PT3H");
  });
  
  it("should work with fractional values", () => {
    const iso = createISO8601Duration(1.5, days);
    
    expect(iso).toBe("P1DT12H");
  });
});

// =============================================================================
// ISO 8601 Interval Tests
// =============================================================================

describe("createISO8601Interval", () => {
  it("should create interval from two dates", () => {
    const start = new Date("2021-10-17T07:44:00.000Z");
    const end = new Date("2021-10-17T08:44:00.000Z");
    
    const interval = createISO8601Interval(start, end);
    
    expect(interval).toBe("2021-10-17T07:44:00.000Z/2021-10-17T08:44:00.000Z");
  });
});

describe("createISO8601IntervalFromDuration", () => {
  it("should create interval from start date and duration", () => {
    const start = new Date("2021-10-17T07:44:00.000Z");
    const duration = measurement(1, hours);
    
    const interval = createISO8601IntervalFromDuration(start, duration);
    
    expect(interval).toBe("2021-10-17T07:44:00.000Z/PT1H");
  });
  
  it("should handle complex durations", () => {
    const start = new Date("2021-10-17T07:44:00.000Z");
    const duration = measurement(90, minutes);
    
    const interval = createISO8601IntervalFromDuration(start, duration);
    
    expect(interval).toBe("2021-10-17T07:44:00.000Z/PT1H30M");
  });
});

describe("parseISO8601Interval", () => {
  it("should parse start/end interval", () => {
    const { start, end, duration } = parseISO8601Interval(
      "2021-10-17T07:44:00.000Z/2021-10-17T08:44:00.000Z",
      hours
    );
    
    expect(start).toEqual(new Date("2021-10-17T07:44:00.000Z"));
    expect(end).toEqual(new Date("2021-10-17T08:44:00.000Z"));
    expect(duration.n).toBeCloseTo(1);
  });
  
  it("should parse start/duration interval", () => {
    const { start, end, duration } = parseISO8601Interval(
      "2021-10-17T07:44:00.000Z/PT1H",
      minutes
    );
    
    expect(start).toEqual(new Date("2021-10-17T07:44:00.000Z"));
    expect(end).toEqual(new Date("2021-10-17T08:44:00.000Z"));
    expect(duration.n).toBeCloseTo(60);
  });
  
  it("should parse duration/end interval", () => {
    const { start, end, duration } = parseISO8601Interval(
      "PT2H/2021-10-17T10:00:00.000Z",
      hours
    );
    
    expect(start).toEqual(new Date("2021-10-17T08:00:00.000Z"));
    expect(end).toEqual(new Date("2021-10-17T10:00:00.000Z"));
    expect(duration.n).toBeCloseTo(2);
  });
  
  it("should throw on invalid interval format", () => {
    expect(() => parseISO8601Interval("invalid", seconds)).toThrow();
    expect(() => parseISO8601Interval("PT1H/PT2H", seconds)).toThrow();
  });
});

// =============================================================================
// Round-trip Tests
// =============================================================================

describe("round-trip conversions", () => {
  it("should round-trip through Luxon Duration", () => {
    const original = measurement(123.456, seconds);
    const duration = toLuxonDuration(original);
    const result = fromLuxonDuration(duration, seconds);
    
    expect(result.n).toBeCloseTo(original.n, 3);
  });
  
  it("should round-trip through ISO 8601", () => {
    // Use whole seconds to avoid precision issues
    const original = measurement(3661, seconds); // 1h 1m 1s
    const iso = toISO8601Duration(original);
    const result = fromISO8601Duration(iso, seconds);
    
    expect(result.n).toBeCloseTo(original.n);
  });
  
  it("should round-trip hours through Luxon", () => {
    const original = measurement(2.5, hours);
    const duration = toLuxonDuration(original);
    const result = fromLuxonDuration(duration, hours);
    
    expect(result.n).toBeCloseTo(original.n);
  });
  
  it("should round-trip days through ISO 8601", () => {
    const original = measurement(7, days);
    const iso = toISO8601Duration(original);
    const result = fromISO8601Duration(iso, days);
    
    expect(result.n).toBeCloseTo(original.n);
  });
});

