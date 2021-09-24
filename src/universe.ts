import { measurement } from "./core";

import {
  kelvin,
  kilogram,
  lightYears,
  massPerUnitVolume,
  seconds,
} from "./units/physics";

export const age = measurement(4.35e17, seconds);
export const diameter = measurement(9.2e10, lightYears);
export const mass = measurement(3e52, kilogram); // https://en.wikipedia.org/wiki/Eddington_number
export const density = measurement(9.9e27, massPerUnitVolume);
export const temperature = measurement(2.725, kelvin);
