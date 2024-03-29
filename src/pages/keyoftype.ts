import type { NextPage } from 'next'

// keyof型演算子
// オブジェクトの型からプロパティ名を型として返す型演算子
type Person = {
  name: string
}
type PersonKey = keyof Person

// 2つ以上のプロパティがあるオブジェクトの型にkeyofを使った場合は、すべてのプロパティがユニオン型で返される
type Book = {
  title: string
  price: number
  rating: number
}
type BookKey = keyof Book // type BookKey = "title" | "price" | "rating";と同じ意味

// インデックス型にkeyofを使うと、インデックスキーの型が返る
type MapLike = { [K: string]: any }
type MapKeys = keyof MapLike

// プロパティを持たないオブジェクトの型にkeyofを使うとnever型が返る
type What = keyof {}

// any型にkeyofを使うとstring | number | symbol型が返る
type AnyKeys = keyof any
