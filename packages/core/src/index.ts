/**
 * @quantits/core - Core types and functions for creating type-safe units and quantities
 * @packageDocumentation
 */

// Core types and functions
export * from "./types.js";

// Dimension algebra (normalized dimensions with canonical exponent form)
export * from "./dimension-algebra.js";

// Dimension helpers (legacy multiply, divide, pow - consider using dimension-algebra instead)
export * from "./dimension-helpers.js";

// Unit helpers (kilo, mega, conv, etc.)
export * from "./helpers.js";

// Conversion
export * from "./convert.js";

