type FalseType = 0 | "" | false | [] | { [key: string]: never }
type AnyOf<T extends readonly any[]> = T[number] extends FalseType
  ? false
  : true
  // TODO AnyOf 为什么有一个 为真就返回全为真
// my solution ,too complicated
// type AnyOf<T extends readonly any[]> = T extends [infer F, ...infer R]
//   ? F extends FalseType
//     ? AnyOf<R>
//     : true
//   : false
