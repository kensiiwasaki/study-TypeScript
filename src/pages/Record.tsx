// Record<Keys, Type>
// keyとtypeで構成されたオブジェクトを作ることができる

// 例
type StringNumber = Record<string, number>
const value: StringNumber = { a: 1, b: 2, c: 3 }
// キーがいづれかになるオブジェクトの型も定義できる
type Person = Record<'firstName' | 'middleName' | 'lastName', string>
const person: Person = {
  firstName: 'Robert',
  middleName: 'Cecil',
  lastName: 'Martin',
}
