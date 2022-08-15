type PromiseAllType<T> = Promise<{
    [P in keyof T] : T[P] extends Promise<infer R> ? R : T[P]
}>
declare function PromiseAll<T extends any[]>(values: readonly [...T]): PromiseAllType<T>

// 代码详解：

// 因为Promise.all()函数接受的是一个数组，因此泛型T限制为一个any[]类型的数组。
// PromiseAllType的实现思路有点像之前的PromiseType，只不过这里多了一层Promise的包裹，因为Promise.all()的返回类型也是一个Promise。
// #