type KeyType = string | number | symbol
type AppendToObject<T extends object, K extends KeyType, V> = {
    [P in keyof T | K]: P extends keyof T ? T[P] : V
}
