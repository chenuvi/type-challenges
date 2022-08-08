type Pop<T extends any[]> = T extends [... infer Left, any] ? Left : never;
