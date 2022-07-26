type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> & {
  readonly [P in K]: T[P]
}

// type MyReadonly2<T, K extends keyof T = keyof T> = Readonly<Pick<T, K>> &
//   Omit<T, K>
