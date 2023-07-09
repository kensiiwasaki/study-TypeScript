// indexed access types
// インデックスアクセス型はプロパティ型や配列要素の型を参照する

// 例
type A = { foo: number }
type Foo = A['foo'] // type Foo = number

// ユニオン型にも使える
// 例
type Person = { name: string; age: number }
type T = Person['name' | 'age']
