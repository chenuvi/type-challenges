type ReplaceAll<S extends string, From extends string, To extends string> = S extends `${infer L}${From}${infer R}`
    ? From extends ''
        ? S
        : `${ReplaceAll<L, From, To>}${To}${ReplaceAll<R, From, To>}`
    : S

type Null = string extends {} ? true : false

type _T7 = 'a' extends 'a' | 'b' | 'c' ? true : false;