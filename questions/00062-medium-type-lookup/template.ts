type LookUp<U extends { type: string }, T extends string> = U extends { type: T } ? U : never

// U extends { type: string; }：这段代码限制U的类型必须是具有属性为type的对象。
