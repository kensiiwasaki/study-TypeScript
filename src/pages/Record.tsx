// Record<Keys, Type>
// keyとtypeで構成されたオブジェクトを作ることができる

// 例
type StringNumber = Record<string, number>
const value: StringNumber = { a: 1, b: 2, c: 3 }
