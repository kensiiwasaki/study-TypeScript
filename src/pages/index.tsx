import type { NextPage } from 'next'

// console.log(typeof null)

// // ボックス化
// // プリミティブ型
// const str = 'abc'
// // ラッパーオブジェクトに入れる
// const strObject = new String(str)
// // オブジェクトのように扱う
// strObject.length // フィールドの参照
// strObject.toUpperCase() // メソッド呼び出し

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
