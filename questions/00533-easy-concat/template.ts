type Concat<T extends any[], U extends any[]> = [...T, ...U]


type MyFirst<T extends any[]> = T extends [infer First, ... infer Rest] ? First : never
type t1 = MyFirst<[undefined, 1,]>
type MyTail<T extends any[]> = T extends [infer First, ... infer Rest] ? Rest : never
type t2 = MyTail<[]>



type P<T> = T extends 'x' ? string : number;


type Human = {
    name: string;
    occupation: string;
  }
  type Duck = {
    name: string;
  }
  type Bool = Duck extends Human ? 'yes' : 'no'; 