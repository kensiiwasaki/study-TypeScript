import type { NextPage } from 'next'

// 引数がundefinedの時の変わりの値を指定することができる

// 関数宣言
// function 関数名(引数: 型 = デフォルト値) {}
// アロー関数
// (引数: 型 = デフォルト値) => {};

// 型推論も効く
function foo(x = 1) {
  console.log(x)
}
foo() // 1

// 非同期処理は書けない
async function foo1(x = await Promise.resolve(1)) {}
