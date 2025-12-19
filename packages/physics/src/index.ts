/**
 * @quantits/physics - Physics units and dimensions for QuantiTS
 * @packageDocumentation
 */

// Re-export core for convenience
export * from "@quantits/core";

// Dimensions
export * from "./dimensions.js";

// Units
export * from "./units.js";

// Imperial units
export * from "./imperial.js";

// Universe constants as a namespace
import * as universe from "./universe.js";
export { universe };

