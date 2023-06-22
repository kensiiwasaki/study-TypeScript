import type { NextPage } from 'next'

// スクリプトとモジュール
// スクリプト
const foo = 'foo'

// モジュール
export const foo = 'foo'

// 値の公開非公開
// exportつけた値だけが公開され、他のモジュールから参照できる
// 他のモジュールから利用可能
export const publicValue = 1
