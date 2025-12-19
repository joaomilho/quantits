import { measurement } from "@quantits/core";
import { kelvin, kilogram, lightYears, massPerUnitVolume, seconds } from "./units.js";

/** Approximate age of the observable universe in seconds */
export const age = measurement(4.35e17, seconds);

/** Approximate diameter of the observable universe in light years */
export const diameter = measurement(9.2e10, lightYears);

/** Approximate mass of the observable universe in kilograms (Eddington number) */
export const mass = measurement(3e52, kilogram);

/** Approximate density of the observable universe */
export const density = measurement(9.9e27, massPerUnitVolume);

/** Cosmic microwave background temperature in Kelvin */
export const temperature = measurement(2.725, kelvin);

