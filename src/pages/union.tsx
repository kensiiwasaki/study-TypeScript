import type { NextPage } from 'next'

let numberOrUndefined: number | undefined

// この書き方だとstring型またはnumber[]型になっている
type List1 = string | number[]
// 両方を配列型にする場合は下記
type List2 = (string | number)[]
