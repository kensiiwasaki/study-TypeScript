import type { NextPage } from 'next'

// object、Object、{}の違い
let a1: object
let b1: Object
let c1: {}
// これらはオブジェクトならなんでも代入可能
const a1: object = {} // OK
const b1: Object = {} // OK
const c1: {} = {} // OK

// インデックス型
let obj: {
  [K: string]: number // Kは型変数なんでも良いがKかKeyにするのが一般的
}

obj = { a: 1, b: 2 }
obj.c = 4
obj['d'] = 5
// obj.e = 'test' // これはできない

// コンパイラーオプションのnoUncheckedIndexedAccessを有効にした場合,プロパティが存在しないときundefinedになる
const obj2: { [K: string]: number } = { a: 1 }
const b: number | undefined = obj2.b
console.log(b) // undefined

// Record<K, T>ユーティリティ型でも表現できる、した二つは同じ意味
let objA: { [K: string]: number }
let objB: Record<string, number>

// メソッドの型アノテーション
// let calculator: {
//   sum(x: number, y: number): number
// }

// 関数構文の書き方もできる
let calculator: {
  sum: (x: number, y: number) => number
}

calculator = {
  sum(x, y) {
    return x + y
  },
}

// オブジェクトの型アノテーション (型エイリアス)
type Box = { width: number; height: number }
let box: Box = { width: 1080, height: 720 }

// オブジェクトの型アノテーション (インライン)
let box1: { width: number; height: number }
// 改行して書くことも可能
// let box: {
//   width: number
//   height: number
// }

box1 = { width: 1080, height: 720 } // width,height共にnumber型でないとだめ

box1 = { width: '1080', height: 720 } // widthがnumber型じゃないのでエラー
box1 = { width: 1080 } // heightがないのでエラー

// オブジェクト
const value1 = 123
const value2 = 123
console.log(value1 == value2) //true

const object1 = { value: 123 }
const object2 = { value: 123 }
console.log(object1 == object2) //false
