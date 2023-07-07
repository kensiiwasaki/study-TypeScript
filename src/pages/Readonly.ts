// Readonly<T>
// <T>をすべて読み取り専用にする

// 例
type Person = {
  surname: string
  middleName?: string
  givenName: string
}
type ReadonlyPerson = Readonly<Person>
// したと上は同じ意味
type ReadonlyPerson = {
  readonly surname: string
  readonly middleName?: string
  readonly givenName: string
}

// 再帰的ではない
