/**
 * @quantits/time - Time units and conversions for QuantiTS
 * @packageDocumentation
 * 
 * This package provides comprehensive time units from sub-second to calendar scales,
 * plus conversions to/from Luxon Durations and ISO 8601 duration strings.
 */

import { conversionUnit, equal, convert, measurement, type ConversionUnit, type Equal, type AnyUnit, type Measurement } from "@quantits/core";
import type { BigDecimal } from "bigdecimal.js";
import { Duration, type DurationLikeObject } from "luxon";
import {
  // Time dimension
  type Time,
  time,
  
  // Base unit
  type Second,
  second,
  seconds,
  
  // Sub-second units
  type Picosecond,
  picosecond,
  picoseconds,
  ps,
  
  type Nanosecond,
  nanosecond,
  nanoseconds,
  ns,
  
  type Microsecond,
  microsecond,
  microseconds,
  μs,
  us,
  
  type Milisecond,
  milisecond,
  miliseconds,
  ms,
  
  // Larger units
  type Minute,
  minute,
  minutes,
  
  type Hour,
  hour,
  hours,
  
  // Calendar units from physics
  type Day,
  day,
  days,
  
  type Week,
  week,
  weeks,
} from "@quantits/physics";

// Re-export all time units from physics
export {
  // Time dimension
  type Time,
  time,
  
  // Base unit
  type Second,
  second,
  seconds,
  
  // Sub-second units
  type Picosecond,
  picosecond,
  picoseconds,
  ps,
  
  type Nanosecond,
  nanosecond,
  nanoseconds,
  ns,
  
  type Microsecond,
  microsecond,
  microseconds,
  μs,
  us,
  
  type Milisecond,
  milisecond,
  miliseconds,
  ms,
  
  // Larger units
  type Minute,
  minute,
  minutes,
  
  type Hour,
  hour,
  hours,
  
  // Calendar units
  type Day,
  day,
  days,
  
  type Week,
  week,
  weeks,
};

// =============================================================================
// Calendar units (time-specific)
// =============================================================================

/** A month, defined as 30 days (approximate average) */
export type Month = ConversionUnit<"Month", Equal<30, Day>>;
export const month: Month = conversionUnit("Month", equal(30, day));
export const months = month;

/** A year, defined as 365 days (non-leap) */
export type Year = ConversionUnit<"Year", Equal<365, Day>>;
export const year: Year = conversionUnit("Year", equal(365, day));
export const years = year;

/** A leap year, defined as 366 days */
export type LeapYear = ConversionUnit<"LeapYear", Equal<366, Day>>;
export const leapYear: LeapYear = conversionUnit("LeapYear", equal(366, day));
export const leapYears = leapYear;

/** A decade, defined as 10 years */
export type Decade = ConversionUnit<"Decade", Equal<10, Year>>;
export const decade: Decade = conversionUnit("Decade", equal(10, year));
export const decades = decade;

/** A century, defined as 100 years */
export type Century = ConversionUnit<"Century", Equal<100, Year>>;
export const century: Century = conversionUnit("Century", equal(100, year));
export const centuries = century;

/** A millennium, defined as 1000 years */
export type Millennium = ConversionUnit<"Millennium", Equal<1000, Year>>;
export const millennium: Millennium = conversionUnit("Millennium", equal(1000, year));
export const millennia = millennium;

// =============================================================================
// Average calendar units (more precise)
// =============================================================================

/** Average Gregorian month (365.2425 / 12 ≈ 30.44 days) */
export type AverageMonth = ConversionUnit<"AverageMonth", Equal<30.436875, Day>>;
export const averageMonth: AverageMonth = conversionUnit("AverageMonth", equal(30.436875, day));
export const averageMonths = averageMonth;

/** Average Gregorian year (365.2425 days, accounts for leap years) */
export type AverageYear = ConversionUnit<"AverageYear", Equal<365.2425, Day>>;
export const averageYear: AverageYear = conversionUnit("AverageYear", equal(365.2425, day));
export const averageYears = averageYear;

/** Julian year (365.25 days, used in astronomy) */
export type JulianYear = ConversionUnit<"JulianYear", Equal<365.25, Day>>;
export const julianYear: JulianYear = conversionUnit("JulianYear", equal(365.25, day));
export const julianYears = julianYear;

// =============================================================================
// Luxon Duration Conversion
// =============================================================================

/** Time units that can be converted to/from Luxon Duration */
export type TimeUnit = 
  | Second | Milisecond | Microsecond | Nanosecond | Picosecond
  | Minute | Hour | Day | Week
  | Month | Year | LeapYear
  | Decade | Century | Millennium
  | AverageMonth | AverageYear | JulianYear;

/**
 * Convert a QuantiTS time measurement to a Luxon Duration
 * 
 * @example
 * ```ts
 * import { measurement } from "@quantits/core";
 * import { hours, toLuxonDuration } from "@quantits/time";
 * 
 * const duration = toLuxonDuration(measurement(2.5, hours));
 * // Duration { hours: 2, minutes: 30 }
 * ```
 */
export function toLuxonDuration<N extends number, U extends AnyUnit>(
  m: Measurement<N, U>
): Duration {
  // Convert to milliseconds first (Luxon's base unit)
  const msValue = (convert(m, milisecond) as BigDecimal).numberValue();
  return Duration.fromMillis(msValue);
}

/**
 * Convert a Luxon Duration to a QuantiTS measurement in the specified unit
 * 
 * @example
 * ```ts
 * import { Duration } from "luxon";
 * import { hours, fromLuxonDuration } from "@quantits/time";
 * 
 * const duration = Duration.fromObject({ hours: 2, minutes: 30 });
 * const m = fromLuxonDuration(duration, hours);
 * // Measurement { n: 2.5, u: hours }
 * ```
 */
export function fromLuxonDuration<U extends AnyUnit>(
  duration: Duration,
  unit: U
): Measurement<number, U> {
  // Get milliseconds from Luxon Duration
  const msValue = duration.as("milliseconds");
  
  // Convert from milliseconds to the target unit
  const conversionFactor = (convert(milisecond, unit) as BigDecimal).numberValue();
  const value = msValue * conversionFactor;
  
  return measurement(value, unit);
}

/**
 * Create a Luxon Duration directly from a value and unit
 * 
 * @example
 * ```ts
 * import { hours, createLuxonDuration } from "@quantits/time";
 * 
 * const duration = createLuxonDuration(2.5, hours);
 * // Duration { hours: 2, minutes: 30 }
 * ```
 */
export function createLuxonDuration<N extends number, U extends AnyUnit>(
  value: N,
  unit: U
): Duration {
  return toLuxonDuration(measurement(value, unit));
}

// =============================================================================
// ISO 8601 Duration Conversion
// =============================================================================

/**
 * Convert a QuantiTS time measurement to an ISO 8601 duration string
 * 
 * The ISO 8601 duration format is: PnYnMnDTnHnMnS
 * - P: duration designator (for period)
 * - nY: number of years
 * - nM: number of months
 * - nD: number of days
 * - T: time designator (separates date and time components)
 * - nH: number of hours
 * - nM: number of minutes
 * - nS: number of seconds (can include decimal fractions)
 * 
 * @example
 * ```ts
 * import { measurement } from "@quantits/core";
 * import { hours, toISO8601Duration } from "@quantits/time";
 * 
 * const iso = toISO8601Duration(measurement(2.5, hours));
 * // "PT2H30M"
 * ```
 */
export function toISO8601Duration<N extends number, U extends AnyUnit>(
  m: Measurement<N, U>
): string {
  // Convert to seconds for precise calculation
  const totalSeconds = (convert(m, second) as BigDecimal).numberValue();
  
  if (totalSeconds === 0) {
    return "PT0S";
  }
  
  const isNegative = totalSeconds < 0;
  let remaining = Math.abs(totalSeconds);
  
  // Calculate each component
  const years = Math.floor(remaining / (365 * 24 * 60 * 60));
  remaining %= 365 * 24 * 60 * 60;
  
  const months = Math.floor(remaining / (30 * 24 * 60 * 60));
  remaining %= 30 * 24 * 60 * 60;
  
  const daysValue = Math.floor(remaining / (24 * 60 * 60));
  remaining %= 24 * 60 * 60;
  
  const hoursValue = Math.floor(remaining / (60 * 60));
  remaining %= 60 * 60;
  
  const minutesValue = Math.floor(remaining / 60);
  remaining %= 60;
  
  const secondsValue = remaining;
  
  // Build the ISO 8601 string
  let result = isNegative ? "-P" : "P";
  
  // Date part
  if (years > 0) result += `${years}Y`;
  if (months > 0) result += `${months}M`;
  if (daysValue > 0) result += `${daysValue}D`;
  
  // Time part
  const hasTimePart = hoursValue > 0 || minutesValue > 0 || secondsValue > 0;
  const hasDatePart = years > 0 || months > 0 || daysValue > 0;
  
  if (hasTimePart) {
    result += "T";
    if (hoursValue > 0) result += `${hoursValue}H`;
    if (minutesValue > 0) result += `${minutesValue}M`;
    if (secondsValue > 0) {
      // Format seconds with minimal decimal places
      if (Number.isInteger(secondsValue)) {
        result += `${secondsValue}S`;
      } else {
        // Remove trailing zeros after decimal point
        result += `${parseFloat(secondsValue.toFixed(9))}S`;
      }
    }
  } else if (!hasDatePart) {
    // Edge case: zero duration
    result += "T0S";
  }
  
  return result;
}

/**
 * Parse an ISO 8601 duration string to a QuantiTS measurement
 * 
 * Supports the full ISO 8601 duration format: PnYnMnDTnHnMnS
 * 
 * @example
 * ```ts
 * import { seconds, fromISO8601Duration } from "@quantits/time";
 * 
 * const m = fromISO8601Duration("PT2H30M", seconds);
 * // Measurement { n: 9000, u: seconds }
 * ```
 */
export function fromISO8601Duration<U extends AnyUnit>(
  isoString: string,
  unit: U
): Measurement<number, U> {
  const normalizedString = isoString.trim().toUpperCase();
  
  // Handle negative durations
  const isNegative = normalizedString.startsWith("-");
  const str = isNegative ? normalizedString.slice(1) : normalizedString;
  
  if (!str.startsWith("P")) {
    throw new Error(`Invalid ISO 8601 duration: must start with 'P'. Got: ${isoString}`);
  }
  
  // Split into date and time parts
  const content = str.slice(1); // Remove 'P'
  const tIndex = content.indexOf("T");
  
  const datePart = tIndex >= 0 ? content.slice(0, tIndex) : content;
  const timePart = tIndex >= 0 ? content.slice(tIndex + 1) : "";
  
  // Parse date components
  let totalSeconds = 0;
  
  // Parse date part (Y, M, D)
  const dateRegex = /(\d+(?:\.\d+)?)(Y|M|D)/g;
  let dateMatch: RegExpExecArray | null;
  while ((dateMatch = dateRegex.exec(datePart)) !== null) {
    const value = parseFloat(dateMatch[1]!);
    const unit = dateMatch[2];
    
    switch (unit) {
      case "Y":
        totalSeconds += value * 365 * 24 * 60 * 60;
        break;
      case "M":
        totalSeconds += value * 30 * 24 * 60 * 60;
        break;
      case "D":
        totalSeconds += value * 24 * 60 * 60;
        break;
    }
  }
  
  // Parse time part (H, M, S)
  const timeRegex = /(\d+(?:\.\d+)?)(H|M|S)/g;
  let timeMatch: RegExpExecArray | null;
  while ((timeMatch = timeRegex.exec(timePart)) !== null) {
    const value = parseFloat(timeMatch[1]!);
    const unit = timeMatch[2];
    
    switch (unit) {
      case "H":
        totalSeconds += value * 60 * 60;
        break;
      case "M":
        totalSeconds += value * 60;
        break;
      case "S":
        totalSeconds += value;
        break;
    }
  }
  
  // Apply negative sign if present
  if (isNegative) {
    totalSeconds = -totalSeconds;
  }
  
  // Convert from seconds to target unit
  const m = measurement(totalSeconds, second);
  const targetValue = (convert(m, unit) as BigDecimal).numberValue();
  
  return measurement(targetValue, unit);
}

/**
 * Create an ISO 8601 duration string directly from a value and unit
 * 
 * @example
 * ```ts
 * import { hours, createISO8601Duration } from "@quantits/time";
 * 
 * const iso = createISO8601Duration(2.5, hours);
 * // "PT2H30M"
 * ```
 */
export function createISO8601Duration<N extends number, U extends AnyUnit>(
  value: N,
  unit: U
): string {
  return toISO8601Duration(measurement(value, unit));
}

// =============================================================================
// ISO 8601 Interval Support
// =============================================================================

/**
 * Create an ISO 8601 interval string from two dates
 * 
 * ISO 8601 intervals can be represented as:
 * - start/end: "2021-10-17T07:44/2021-10-17T08:44"
 * - start/duration: "2021-10-17T07:44/PT1H"
 * - duration/end: "PT1H/2021-10-17T08:44"
 * 
 * @example
 * ```ts
 * import { createISO8601Interval } from "@quantits/time";
 * 
 * const interval = createISO8601Interval(
 *   new Date("2021-10-17T07:44:00"),
 *   new Date("2021-10-17T08:44:00")
 * );
 * // "2021-10-17T07:44:00.000Z/2021-10-17T08:44:00.000Z"
 * ```
 */
export function createISO8601Interval(
  start: Date,
  end: Date
): string {
  return `${start.toISOString()}/${end.toISOString()}`;
}

/**
 * Create an ISO 8601 interval with a start date and duration
 * 
 * @example
 * ```ts
 * import { measurement } from "@quantits/core";
 * import { hours, createISO8601IntervalFromDuration } from "@quantits/time";
 * 
 * const interval = createISO8601IntervalFromDuration(
 *   new Date("2021-10-17T07:44:00"),
 *   measurement(1, hours)
 * );
 * // "2021-10-17T07:44:00.000Z/PT1H"
 * ```
 */
export function createISO8601IntervalFromDuration<N extends number, U extends AnyUnit>(
  start: Date,
  duration: Measurement<N, U>
): string {
  return `${start.toISOString()}/${toISO8601Duration(duration)}`;
}

/**
 * Parse an ISO 8601 interval string into start date, end date, and duration
 * 
 * @example
 * ```ts
 * import { seconds, parseISO8601Interval } from "@quantits/time";
 * 
 * const { start, end, duration } = parseISO8601Interval(
 *   "2021-10-17T07:44:00.000Z/PT1H",
 *   seconds
 * );
 * ```
 */
export function parseISO8601Interval<U extends AnyUnit>(
  intervalString: string,
  unit: U
): { start: Date | null; end: Date | null; duration: Measurement<number, U> } {
  const parts = intervalString.split("/");
  
  if (parts.length !== 2) {
    throw new Error(`Invalid ISO 8601 interval: must have exactly two parts separated by '/'. Got: ${intervalString}`);
  }
  
  const [firstPart, secondPart] = parts as [string, string];
  
  // Determine which format we have
  const firstIsDuration = firstPart.toUpperCase().startsWith("P");
  const secondIsDuration = secondPart.toUpperCase().startsWith("P");
  
  if (firstIsDuration && secondIsDuration) {
    throw new Error(`Invalid ISO 8601 interval: cannot have two durations. Got: ${intervalString}`);
  }
  
  let start: Date | null = null;
  let end: Date | null = null;
  let duration: Measurement<number, U>;
  
  if (firstIsDuration) {
    // duration/end format
    duration = fromISO8601Duration(firstPart, unit);
    end = new Date(secondPart);
    const durationMs = (convert(duration, milisecond) as BigDecimal).numberValue();
    start = new Date(end.getTime() - durationMs);
  } else if (secondIsDuration) {
    // start/duration format
    start = new Date(firstPart);
    duration = fromISO8601Duration(secondPart, unit);
    const durationMs = (convert(duration, milisecond) as BigDecimal).numberValue();
    end = new Date(start.getTime() + durationMs);
  } else {
    // start/end format
    start = new Date(firstPart);
    end = new Date(secondPart);
    const durationMs = end.getTime() - start.getTime();
    const durationSeconds = durationMs / 1000;
    const m = measurement(durationSeconds, second);
    const targetValue = (convert(m, unit) as BigDecimal).numberValue();
    duration = measurement(targetValue, unit);
  }
  
  return { start, end, duration };
}

// Re-export Duration from luxon for convenience
export { Duration } from "luxon";

