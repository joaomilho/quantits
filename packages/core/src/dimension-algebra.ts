/**
 * Dimension Algebra - Canonical normalization of physical dimensions
 * 
 * Dimensions are represented as products of base dimensions with exponents:
 * - Speed = Length¹ × Time⁻¹ → { Length: 1, Time: -1 }
 * - Area = Length² → { Length: 2 }
 * - Force = Mass¹ × Length¹ × Time⁻² → { Mass: 1, Length: 1, Time: -2 }
 * 
 * This allows automatic equivalence detection:
 * - multiply(Length, Length) === pow(Length, 2)
 * - divide(Length, Time) === multiply(Length, pow(Time, -1))
 */

/** Base dimension names as literal types */
export type BaseDimensionName = string;

/** 
 * Exponent map: dimension name -> exponent 
 * Zero exponents are omitted (normalized out)
 */
export type Exponents = Readonly<Record<string, number>>;

/**
 * A dimension represented as a product of base dimensions with exponents
 */
export type Dimension<E extends Exponents = Exponents> = {
  readonly type: "Dimension";
  readonly exponents: E;
};

/** Create a base dimension (exponent = 1) */
export function baseDimension<Name extends string>(
  name: Name
): Dimension<{ readonly [K in Name]: 1 }> {
  return {
    type: "Dimension",
    exponents: { [name]: 1 } as { readonly [K in Name]: 1 },
  };
}

/** Dimensionless quantity (all exponents are 0, represented as empty object) */
export const dimensionless: Dimension<{}> = {
  type: "Dimension",
  exponents: {},
};

/** Check if a dimension is dimensionless */
export function isDimensionless(d: Dimension): boolean {
  return Object.keys(d.exponents).length === 0;
}

/**
 * Normalize exponents by removing zeros and sorting keys
 */
function normalizeExponents(exp: Record<string, number>): Exponents {
  const result: Record<string, number> = {};
  const keys = Object.keys(exp).sort();
  
  for (const key of keys) {
    const value = exp[key];
    if (value !== undefined && value !== 0) {
      result[key] = value;
    }
  }
  
  return result;
}

/**
 * Multiply two dimensions (add exponents)
 * Length × Time = { Length: 1, Time: 1 }
 * Length × Length = { Length: 2 }
 */
export function mul<E1 extends Exponents, E2 extends Exponents>(
  d1: Dimension<E1>,
  d2: Dimension<E2>
): Dimension<MulExponents<E1, E2>> {
  const result: Record<string, number> = { ...d1.exponents };
  
  for (const [key, value] of Object.entries(d2.exponents)) {
    result[key] = (result[key] ?? 0) + value;
  }
  
  return {
    type: "Dimension",
    exponents: normalizeExponents(result),
  } as Dimension<MulExponents<E1, E2>>;
}

/**
 * Divide two dimensions (subtract exponents)
 * Length / Time = { Length: 1, Time: -1 }
 * Length / Length = {} (dimensionless)
 */
export function div<E1 extends Exponents, E2 extends Exponents>(
  d1: Dimension<E1>,
  d2: Dimension<E2>
): Dimension<DivExponents<E1, E2>> {
  const result: Record<string, number> = { ...d1.exponents };
  
  for (const [key, value] of Object.entries(d2.exponents)) {
    result[key] = (result[key] ?? 0) - value;
  }
  
  return {
    type: "Dimension",
    exponents: normalizeExponents(result),
  } as Dimension<DivExponents<E1, E2>>;
}

/**
 * Raise a dimension to a power (multiply all exponents)
 * Length² = { Length: 2 }
 * (Length × Time)² = { Length: 2, Time: 2 }
 */
export function power<E extends Exponents, N extends number>(
  d: Dimension<E>,
  n: N
): Dimension<PowExponents<E, N>> {
  const result: Record<string, number> = {};
  
  for (const [key, value] of Object.entries(d.exponents)) {
    result[key] = value * n;
  }
  
  return {
    type: "Dimension",
    exponents: normalizeExponents(result),
  } as Dimension<PowExponents<E, N>>;
}

/**
 * Invert a dimension (negate all exponents)
 * 1/Time = { Time: -1 }
 */
export function invert<E extends Exponents>(
  d: Dimension<E>
): Dimension<InvertExponents<E>> {
  return power(d, -1) as Dimension<InvertExponents<E>>;
}

/**
 * Check if two dimensions are equal (same exponents)
 */
export function dimensionsEqual(
  d1: Dimension,
  d2: Dimension
): boolean {
  const keys1 = Object.keys(d1.exponents).sort();
  const keys2 = Object.keys(d2.exponents).sort();
  
  if (keys1.length !== keys2.length) return false;
  
  for (let i = 0; i < keys1.length; i++) {
    if (keys1[i] !== keys2[i]) return false;
    if (d1.exponents[keys1[i]!] !== d2.exponents[keys2[i]!]) return false;
  }
  
  return true;
}

/**
 * Get a human-readable string representation of a dimension
 * { Length: 2, Time: -1 } → "Length² × Time⁻¹"
 */
export function dimensionToString(d: Dimension): string {
  const entries = Object.entries(d.exponents).sort(([a], [b]) => a.localeCompare(b));
  
  if (entries.length === 0) return "1";
  
  const superscripts: Record<string, string> = {
    "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴",
    "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹",
    "-": "⁻",
  };
  
  function toSuperscript(n: number): string {
    if (n === 1) return "";
    return String(n).split("").map(c => superscripts[c] ?? c).join("");
  }
  
  return entries.map(([name, exp]) => `${name}${toSuperscript(exp)}`).join(" × ");
}

// ============================================================================
// Type-level arithmetic (using template literal types for compile-time checks)
// ============================================================================

/** Type-level addition of numbers (limited range for practical use) */
type AddNumbers<A extends number, B extends number> = number; // Simplified - full impl would use tuple lengths

/** Type-level subtraction */
type SubNumbers<A extends number, B extends number> = number;

/** Type-level multiplication */
type MulNumbers<A extends number, B extends number> = number;

/** 
 * Type-level exponent addition for multiplication
 * In practice, we use a simplified version that preserves structure
 */
export type MulExponents<E1 extends Exponents, E2 extends Exponents> = {
  readonly [K in keyof E1 | keyof E2]: number;
};

/** Type-level exponent subtraction for division */
export type DivExponents<E1 extends Exponents, E2 extends Exponents> = {
  readonly [K in keyof E1 | keyof E2]: number;
};

/** Type-level exponent multiplication for power */
export type PowExponents<E extends Exponents, N extends number> = {
  readonly [K in keyof E]: number;
};

/** Type-level exponent negation for inversion */
export type InvertExponents<E extends Exponents> = {
  readonly [K in keyof E]: number;
};

// ============================================================================
// Convenience constructors for common physics dimensions
// ============================================================================

/** Create a composed dimension from base dimensions with explicit exponents */
export function composeDimension<E extends Exponents>(
  exponents: E
): Dimension<E> {
  return {
    type: "Dimension",
    exponents: normalizeExponents(exponents) as E,
  };
}
