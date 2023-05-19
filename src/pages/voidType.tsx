import type { NextPage } from 'next'

// 戻り値がない関数の戻り値を型注釈するにはvoid型を使う
function print(message: string): void {
  console.log(message)
}

// undefinedとvoidの違い
// undefinedの時はreturnが必須
// undefined型はvoid型に代入できるが、void型はundefined型に代入できない
// voidはundefinedの上位型
