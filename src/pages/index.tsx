import type { NextPage } from 'next'

// オブジェクトの型アノテーション
let box: { width: number; height: number }
// 改行して書くことも可能
// let box: {
//   width: number
//   height: number
// }

box = { width: 1080, height: 720 } // width,height共にnumber型でないとだめ

box = { width: '1080', height: 720 } // widthがnumber型じゃないのでエラー
box = { width: 1080 } // heightがないのでエラー

// オブジェクト
const value1 = 123
const value2 = 123
console.log(value1 == value2) //true

const object1 = { value: 123 }
const object2 = { value: 123 }
console.log(object1 == object2) //false

// リテラル型
let x: 1
x = 1
// x = 100　// xに1以外の値を入れるとエラーになる

// リテラル型とユニオン型の組み合わせ
let num: 1 | 2 | 3
num = 1
num = 3
// num = 5 // numに1,2,3以外の値はエラーになる

// // ボックス化
// // プリミティブ型
const abc = 'abc'
// // ラッパーオブジェクトに入れる
const strObject = new String(abc)
// // オブジェクトのように扱う
strObject.length // フィールドの参照
strObject.toUpperCase() // メソッド呼び出し

// 自動ボックス化
const str = 'abc'
// オブジェクトのように扱う
str.length // フィールドの参照
str.toUpperCase() // メソッド呼び出し

// const obj = { a: 1 }
// obj.a = 2
// console.log(obj)
let obj: {
  readonly a: number
}
obj = { a: 1 }

// const nums = [1, 2]
// nums.push(3)
// console.log(nums)
const nums: readonly number[] = [1, 2, 3]

const Home: NextPage = () => {
  return <div className="text-blue-500">Hello!</div>
}

export default Home
