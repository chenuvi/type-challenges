// type Space = ' ' | '\n' | '\t'
type TrimRight<S extends string> = S extends `${infer Left}${Space}` ? TrimRight<Left> : S;
