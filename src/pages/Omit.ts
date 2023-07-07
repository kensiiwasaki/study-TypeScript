// Omit<T, Keys>
// Omit<T, Keys>はkeysで指定したプロパティを除いたobjectを返すユーティリティ型

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
type Optional = 'age' | 'address' | 'nationality' | 'createdAt' | 'updatedAt'
type Person = Omit<User, Optional>
// 上と下は同じ意味になる
type Person = {
  surname: string
  middleName?: string
  givenName: string
}

// 下のように存在しない型を指定しても指摘してくれないので注意
type Optional = 'createdat' | 'updatedat' | 'age' | 'address' | 'nationality'
type Person = Omit<User, Optional>
