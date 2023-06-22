import type { NextPage } from 'next'

// keyof型演算子
// オブジェクトの型からプロパティ名を型として返す型演算子
type Person = {
  name: string
}
type PersonKey = keyof Person
