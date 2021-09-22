import { Operation } from "../operation";
import { AnySimpleDimension, Dimension } from "./dimension";

export type ComposedDimension<Name extends string, C extends AnyComposition> = {
  type: "ComposedDimension";
  name: Name;
  composition: C;
};

export function composedDimension<
  Name extends string,
  C extends AnyComposition
>(name: Name, composition: C): ComposedDimension<Name, C> {
  return { type: "ComposedDimension", name, composition };
}

export type AnyComposedDimansion = ComposedDimension<string, AnyComposition>;
export type AnyDimension = AnySimpleDimension | AnyComposedDimansion;

export type Composition<
  D1 extends AnyDimension,
  Op extends Operation,
  D2 extends AnyDimension | number
> = { d1: D1; op: Op; d2: D2 };

// Does not refer to Composition cause TS complains of circularity
export type AnyComposition = {
  d1: AnyDimension;
  op: Operation;
  d2: AnyDimension | number;
};
