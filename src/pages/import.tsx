import type { NextPage } from 'next'

// スクリプトとモジュール
// スクリプト
const foo1 = 'foo'

// モジュール
export const foo2 = 'foo'

// 値の公開非公開
// exportつけた値だけが公開され、他のモジュールから参照できる
// 他のモジュールから利用可能
export const publicValue = 1

// 外部からの利用不可
const privateValue = 2

// モジュールは常にstrict-mode
// 未定義の変数fooへの代入は不可
foo = 1
export const bar = foo
