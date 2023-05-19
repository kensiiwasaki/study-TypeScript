import type { NextPage } from 'next'

// typeofは値の型を調べることができる
typeof true //=> "boolean"
typeof 0 //=> "number"
typeof 'Hello World' //=> "string"
typeof undefined //=> "undefined"
typeof null //=> "object"
typeof Symbol() //=> "symbol"
typeof 1n //=> "bigint"
typeof [1, 2, 3] //=> "object"
typeof { a: 1, b: 2 } //=> "object"
typeof (() => {}) //=> "function"

// 条件分岐等で使うことが多い
const n: unknown = ''

if (typeof n === 'string') {
  n.toUpperCase
}

// typeof null => "object"になるので注意が必要
function isObject(value) {
  return typeof value === 'object' // valueがnullになる場合を考慮していない
}

isObject(null) // 戻り値がtrueになってしまう

// typeof nullを考慮した実装は以下
function isObject(value) {
  return value !== null && typeof value === 'object'
}
