import type { NextPage } from 'next'

// オプショナルチェーン
// null,undefinedのプロパティを参照するとエラーになる問題
const book1 = undefined
const title1 = book1.title // ここでエラーになる

// 回避策(力技の条件分岐)
const book2 = undefined
const title2 = book2 === null || book2 === undefined ? undefined : book2.title
console.log(title2)

// オプショナルチェーン
// 関数、メソッド、配列の参照もほぼ同じように使用することができる
const book3 = undefined
const title3 = book3?.title
console.log(title3) // undefined
// ネストも当然可能
const book4 = { author: { email: 'alice@example.com' } }
const authorEmail = book4?.author?.email
console.log(authorEmail)

//  Null合体演算子と組み合わせる
const book5 = undefined
const title5 = book5?.title ?? 'デフォルトタイトル'
console.log(title5) // デフォルトタイトル

// object、Object、{}の違い
let a1: object
let b1: Object
let c1: {}
// これらはオブジェクトならなんでも代入可能
const a1: object = {} // OK
const b1: Object = {} // OK
const c1: {} = {} // OK

// objectはオブジェクト型の値のみ代入できてプリミティブ型の値は代入できない
let a: object
a = { x: 1 } // OK
a = [1, 2, 3] // OK。配列はオブジェクト
a = /a-z/ // OK。正規表現はオブジェクト

a = 1 // プリミティブ型はNG

let a2: Object
a2 = {} // OK

// ボックス化可能なプリミティブ型OK
a2 = 1 // OK
a2 = true // OK
a2 = 'string' // OK

a2 = null // nullとundefinedはNG

let a3: {}
a3 = {} // OK

// ボックス化可能なプリミティブ型OK
a3 = 1 // OK
a3 = true // OK
a3 = 'string' // OK

a3 = null // nullとundefinedはNG

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
