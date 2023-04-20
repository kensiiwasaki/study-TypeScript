import type { NextPage } from 'next'

// ユニオン型は"どれか"に対してインターセクション型は"どれも"
type TwoDimensionalPoint = {
  x: number
  y: number
}
type Z = {
  z: number
}

type ThreeDimensionalPoint = TwoDimensionalPoint & Z
// そのため下記はエラーになる
const p: ThreeDimensionalPoint = {
  x: 0,
  y: 1,
}

// プリミティブ型のインターセクション型を作るとnever型になる
type Never = string & number

// インターセクション型よく使う使われ方
// 肥大化したパラメータ
type Parameter1 = {
  id: string
  index?: number
  active: boolean
  balance: number
  photo?: string
  age?: number
  surname: string
  givenName: string
  company?: string
  email: string
  phoneNumber?: string
  address?: string
}
// 必須と必須でないパラメータに分離
// Required<T>,Partial<T>を使うと必須・必須でないを一括で明示的に示せる
type Mandatory = Required<{
  id: string
  active: boolean
  balance: number
  surname: string
  givenName: string
  email: string
}>
type Optional = Partial<{
  index: number
  photo: string
  age: number
  company: string
  phoneNumber: string
  address: string
}>
// 必須パラメータとそうでないものが少しわかりやすくなる
type Parameter2 = Mandatory & Optional
