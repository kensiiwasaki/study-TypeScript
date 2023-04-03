import type { NextPage } from 'next'

// 配列リテラル
// 配列リテラルは普通に配列を書くように記述
;[1, 2, 3]

// 配列の型アノテーション
// 配列の型アノテーションは２通りある
let array1: number[]
array1 = [1, 2, 3]

let array2: Array<number>
array2 = [1, 2, 3]

// JSのオブジェクトはオブジェクトなので比較やコピーの際は注意
// 配列同士の比較
const list1 = [1, 2, 3]
const list2 = [1, 2, 3]
console.log(list1 == list2) //この場合falseになる

// 要素の型
// 0番目の要素をstringにする
const abc: string[] = ['a', 'b', 'c']
const character1: string = abc[0]
character1.toUpperCase() // 問題なく実行される
const character2: string = abc[100] // 存在しない要素にアクセスしてもエラーにならない
character2.toUpperCase() // 実行したタイミングでエラーが出る
// 上記はコンパイラオプションで解決できる

// 読み取り専用の配列
const nums1: readonly number[] = [1, 2, 3]
const nums2: ReadonlyArray<number> = [1, 2, 3]
