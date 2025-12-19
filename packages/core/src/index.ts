/**
 * @quantits/core - Core types and functions for creating type-safe units and quantities
 * @packageDocumentation
 */

// Core types and functions (includes Dimension with backwards-compat)
export * from "./types.js";

// Dimension algebra - explicit exports (Dimension is already in types.js)
export {
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
  type Exponents,
  type MulExponents,
  type DivExponents,
  type PowExponents,
  type InvertExponents,
} from "./dimension-algebra.js";

// Dimension helpers (legacy multiply, divide, pow - consider using dimension-algebra instead)
export * from "./dimension-helpers.js";

// Unit helpers (kilo, mega, conv, etc.)
export * from "./helpers.js";

// Conversion
export * from "./convert.js";
