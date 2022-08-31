type DiffKeys<T, U> = Exclude<keyof T | keyof U, keyof (T | U)>
type Diff<T, U> = {
  [K in DiffKeys<T, U>]: K extends keyof T ? T[K] : K extends keyof U ? U[K] : never
}