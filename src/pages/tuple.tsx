import type { NextPage } from 'next'

// タプル
// TSの関数でreturnできるのは１値のみなので、複数返したい時は配列にまとめる
function tuple1() {
  //...
  return [1, 'ok', true]
}
// この場合tupleを呼び出す時の型がany[]かunknown[]になってしまう
// unknown[]だとメソッドを呼び出すことができない
const list1: unknown[] = tuple1()
// そこでタプルを使用する
function tuple2(): [number, string, boolean] {
  //...
  return [1, 'ok', true]
}

const list2: [number, string, boolean] = tuple2()
// タプルへのアクセス
list2[0].toExponential()
list2[1].length
list2[2].valueOf()
