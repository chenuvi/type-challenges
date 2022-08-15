type Trim<S extends string> = S extends (`${Space}${infer Text}` | `${infer Text}${Space}`) ? Trim<Text> : S
