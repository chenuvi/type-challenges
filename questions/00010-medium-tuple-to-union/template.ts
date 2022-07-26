// type TupleToUnion<T extends readonly any[]> = T[number]

type TupleToUnion<T extends readonly any[]> =
    T extends [ infer First, ...infer Rest]
        ? First | TupleToUnion<Rest>
        : never
