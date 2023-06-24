// Required<T>
// <T>からすべてのオプショナルを取り除く

// 例
type Person = {
  surname: string
  middleName?: string
  givenName: string
}
type RequiredPerson = Required<Person>
