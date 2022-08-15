type ReplaceAll<
  S extends string,
  from extends string,
  to extends string
> = S extends `${infer L}${from}${infer R}`
  ? from extends ""
    ? S
    : `${ReplaceAll<L, from, to>}${to}${ReplaceAll<R, from, to>}`
  : S
