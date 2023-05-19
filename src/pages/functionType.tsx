import type { NextPage } from 'next'

// 関数の型宣言構文
// type 型の名前 = (引数名: 引数の型) => 戻り値の型;
type Increment = (num: number) => number

const increment1: Increment = (num: number): number => num + 1
// 関数の型宣言を型注釈に使った場合、関数の実装側の引数と戻り値の型注釈は省略できる
const increment2: Increment = (num) => num + 1
