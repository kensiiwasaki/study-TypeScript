import type { NextPage } from 'next'

// JSでは引数の数が一致していなくても、関数が呼び出せる
// しかしTSでは引数の数が一致していないとコンパイルエラーになる
function increment(n) {
  return n + 1
}
increment(1, 2) // 引数が多い
increment() // 引数が足りない

// JSでは引数の型チェックも行わない
// TSでは引数の型が一致しないとコンパイルエラーになる
function len(str: string) {
  return str.length
}
len('a') // OK
len(1) // エラー
