import type { NextPage } from 'next'

// 戻り値がない関数の戻り値を型注釈するにはvoid型を使う
function print(message: string): void {
  console.log(message)
}
