type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

// js
// 对比学习法

function MyPick (todo: { [x: string]: any }, keys: string[]) {
    const obj = {}
    keys.forEach((key: string) => {
        if (key in todo) {
            todo[key]
        }
    })
    return obj
}

// 1. 返回一个对象
// 2. 遍历 forEach mapped
// https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// 3. todo[key] 取值 indexed
// https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
// 4. 看看 key 在不在 todo 里面 
        // 4.1 keyof https://www.typescriptlang.org/docs/handbook/2/keyof-types.html#the-keyof-type-operator
        // 4.2 条件约束 https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints