import { AnyComposedUnit } from "./composedUnit";
import { AnyConversionUnit } from "./conversionUnit";
import { AnySimpleUnit } from "../core";

export type AnyUnit = AnySimpleUnit | AnyComposedUnit | AnyConversionUnit;
