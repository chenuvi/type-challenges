type LengthOfStringM<
  S extends string,
  T extends string[] = []
> = S extends `${infer Char}${infer R}`
  ? LengthOfStringM<R, [...T, Char]>
  : T["length"]
