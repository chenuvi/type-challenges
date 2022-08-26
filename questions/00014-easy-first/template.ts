// type First<T extends any[]> = T[0]
// 1
// type First<T extends any[]> = T extends [] ? never : T[0]

// 2 获取 tuple 属性的 length  属性  indexed
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// 3
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

// 4
type First<T extends any[]> = T extends [infer First, ...unknown[]] ? First : never

