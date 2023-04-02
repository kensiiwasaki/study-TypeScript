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
