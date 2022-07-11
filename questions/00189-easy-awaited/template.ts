type MyAwaited<T extends Promise<any>> = T extends Promise<infer R>
    ? R extends Promise<any> ? MyAwaited<R> : R
    : never

/* 
// with @ts-expect-error 
type MyAwaited<T> = T extends Promise<infer R> ? MyAwaited<R> : T;

// 限制传入的 T 为 Promise
type MyAwaited<T extends Promise<any>> =
    T extends Promise<infer U> // 判断 T 是否为 Promise，并推断 Promise 返回的类型
    ? U extends Promise<any> // 如果 Promise 返回的还是 Promise
    ? MyAwaited<U> // 执行递归解析
    : U // 如果 Promise 返回值不是 Promise，则返回 Promise 返回的类型
    : never

*/