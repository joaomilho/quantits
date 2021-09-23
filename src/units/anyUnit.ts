import { AnyComposedUnit } from "./composedUnit";
import { AnyConversionUnit } from "./conversionUnit";
import { AnySimpleUnit } from "./unit";

export type AnyUnit = AnySimpleUnit | AnyComposedUnit | AnyConversionUnit;
