type StringToUnion<T extends string
  > = T extends `${infer Char}${infer Rest}`
  ? Char | StringToUnion<Rest>
  : never

  // TODO way2 借用StringToArray