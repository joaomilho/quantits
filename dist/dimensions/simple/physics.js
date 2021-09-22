"use strict";
// https://en.wikipedia.org/wiki/SI_base_unit
Object.defineProperty(exports, "__esModule", { value: true });
exports.luminousIntensity = exports.amountOfSubstance = exports.temperature = exports.electricCurrent = exports.time = exports.mass = exports.length = void 0;
var dimension_1 = require("./dimension");
exports.length = (0, dimension_1.dimension)("Length");
exports.mass = (0, dimension_1.dimension)("Mass");
exports.time = (0, dimension_1.dimension)("Time");
exports.electricCurrent = (0, dimension_1.dimension)("ElectricCurrent");
exports.temperature = (0, dimension_1.dimension)("Temperature");
exports.amountOfSubstance = (0, dimension_1.dimension)("AmountOfSubstance");
exports.luminousIntensity = (0, dimension_1.dimension)("LuminousIntensity");
