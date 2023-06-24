// Pick<T, Keys>
// <T>から指定したキーを持つオブジェクトの型を返す

// 例
type User = {
  surname: string
  middleName?: string
  givenName: string
  age: number
  address?: string
  nationality: string
  createdAt: string
  updatedAt: string
}
type Person = Pick<User, 'surname' | 'middleName' | 'givenName'>
// 上と下は同じ意味になる
type Person = {
  surname: string
  middleName?: string
  givenName: string
}

// 型が変わった際に１箇所の変更だけで良くなる
