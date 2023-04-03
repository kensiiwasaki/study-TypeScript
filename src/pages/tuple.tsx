import type { NextPage } from 'next'

// タプル
// TSの関数でreturnできるのは１値のみなので、複数返したい時は配列にまとめる
function tuple() {
  //...
  return [1, 'ok', true]
}
// この場合tupleを呼び出す時の型がany[]かunknown[]になってしまう
// unknown[]だとメソッドを呼び出すことができない
const list: unknown[] = tuple()
