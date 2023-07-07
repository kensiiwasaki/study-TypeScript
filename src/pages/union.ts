import type { NextPage } from 'next'

let numberOrUndefined: number | undefined

// この書き方だとstring型またはnumber[]型になっている
type List1 = string | number[]
// 両方を配列型にする場合は下記
type List2 = (string | number)[]

// ユニオン型と絞り込み
const maybeUserId: string | null = localStorage.getItem('userId')

const userId: string = maybeUserId //この書き方だとuserIdがnullの可能性がありエラー

// typeofで型を取得することできるのでそれを使って絞り込む
if (typeof maybeUserId === 'string') {
  const userId: string = maybeUserId // この分岐内では文字列型に絞り込まれるため、代入できる。
}
