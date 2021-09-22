import { Unit, unit } from "./unit";
import {
  Length,
  length,
  Mass,
  mass,
  ElectricCurrent,
  electricCurrent,
  time,
  Time,
  temperature,
  Temperature,
  AmountOfSubstance,
  amountOfSubstance,
  LuminousIntensity,
  luminousIntensity,
} from "../dimensions/physics";

export type Second = Unit<"Second", Time>;
export const second: Second = unit("Second", time);
export const seconds = second;
export const s = second;

export type Meter = Unit<"Meter", Length>;
export const meter: Meter = unit("Meter", length);
export const meters = meter;
export const m = meter;

export type Kilogram = Unit<"Kilogram", Mass>;
export const kilogram: Kilogram = unit("Kilogram", mass);
export const kilograms = kilogram;
export const kg = kilogram;

export type Ampere = Unit<"Ampere", ElectricCurrent>;
export const ampere: Ampere = unit("Ampere", electricCurrent);
export const amperes = ampere;
export const A = ampere;

export type Kelvin = Unit<"Kelvin", Temperature>;
export const kelvin: Kelvin = unit("Kelvin", temperature);
export const kelvins = kelvin;
export const K = kelvin;

export type Mole = Unit<"Mole", AmountOfSubstance>;
export const mole: Mole = unit("Mole", amountOfSubstance);
export const moles = mole;
export const mol = mole;

export type Candela = Unit<"Candela", LuminousIntensity>;
export const candela: Candela = unit("Candela", luminousIntensity);
export const candelas = candela;
export const cd = candela;

export type PhysicsUnit =
  | Second
  | Meter
  | Kilogram
  | Ampere
  | Kelvin
  | Mole
  | Candela;
