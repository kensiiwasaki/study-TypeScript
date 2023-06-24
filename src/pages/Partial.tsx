// Partial<T>
// <T>をすべてオプショナルにする

// 例
type Person = {
  surname: string
  middleName?: string
  givenName: string
}
type PartialPerson = Partial<Person>
// 上と下は同じ意味になる
type PartialPerson = {
  surname?: string
  middleName?: string
  givenName?: string
}
