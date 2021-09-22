export type Dimension<Name extends string> = {
  type: "Dimension";
  name: Name;
};

export function dimension<Name extends string>(name: Name): Dimension<Name> {
  return { type: "Dimension", name };
}

export type AnySimpleDimension = Dimension<string>;
