/*
实现方式
type IsUnion<T, U = T> =
  T extends T
  ? [Exclude<U, T>] extends [never]
    ? false
    : true
  : never
代码详解：上面的实现虽然代码不多，但可能无法一下子就弄明白，为了更好的理解这种实现方式，我们来看如下两个案例分析：

// 案例一
type T = string | number
step1: string | number extends string | number
step2: string extends string | number => [number] extends [never] => true
step3: number extends string | number => [string] extends [never] => true
step4: true | true
result: true

// 案例二
type T = string
step1: string extends string
step2: [never] extends [never] => false
result: false

根据之前我们学到的分布式条件类型知识，T extends T的时候，会把T进行子类型分发。

如案例一的step3、step4，在分发后会把每次迭代的结果联合起来，组合成最终的结果。

#
*/
// TODO 不明白 https://github.com/type-challenges/type-challenges/issues/15365
type IsUnion<T, F = T> =
  (T extends F ? F extends T ? true : false : never) extends true
  ? false
  : true