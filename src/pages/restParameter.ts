import type { NextPage } from 'next'

// 引数の数に決まりがない関数を残余引数(or可変長引数)と呼ぶ
// 型推論効かない
function func(...params) {
  console.log(params)
}
func(1, 2, 3) // [1,2,3]

// 普通の引数との組み合わせもできるが、残余引数が最後の引数にならないといけない
// また残余引数を複数持たせることはできない

// 残余引数の型注釈
function func(...params: number[]) {
  // ...
}
