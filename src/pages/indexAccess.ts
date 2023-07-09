// indexed access types
// インデックスアクセス型はプロパティ型や配列要素の型を参照する

// 例
type A = { foo: number }
type Foo = A['foo'] // type Foo = number

// ユニオン型にも使える
// 例
type Person = { name: string; age: number }
type T = Person['name' | 'age'] // type T = string | number

// keyofと組み合わせると全プロパティの型がユニオン型で得られる
// 例
type Foo = { a: number; b: string; c: boolean }
type T = Foo[keyof Foo]
