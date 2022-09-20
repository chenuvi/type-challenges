type CheckPrefix<S extends string> = S extends '+' | '-' ? S : never
type CheckSuffix<S extends string> = S extends `${infer L}%` ? [L, '%'] : [S, '']
type PercentageParser<S extends string> = S extends `${CheckPrefix<infer L>}${infer R}`
  ? [L, ...CheckSuffix<R>]
  : ['', ...CheckSuffix<S>]