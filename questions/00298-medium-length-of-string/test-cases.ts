import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LengthOfStringM<''>, 0>>,
  Expect<Equal<LengthOfStringM<'kumiko'>, 6>>,
  Expect<Equal<LengthOfStringM<'reina'>, 5>>,
  Expect<Equal<LengthOfStringM<'Sound! Euphonium'>, 16>>,
]
