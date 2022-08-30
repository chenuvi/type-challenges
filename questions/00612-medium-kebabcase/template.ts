type KebabCase<S extends string
  > = S extends `${infer F}${infer Rest}`
  ? Rest extends Uncapitalize<Rest>
    ? `${Uncapitalize<F>}${KebabCase<Rest>}`
    : `${Uncapitalize<F>}-${KebabCase<Rest>}`
  : S
