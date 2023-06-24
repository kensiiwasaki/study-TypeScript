// Readonly<T>
// <T>をすべて読み取り専用にする

// 例
type Person = {
  surname: string
  middleName?: string
  givenName: string
}
type ReadonlyPerson = Readonly<Person>
