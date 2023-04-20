import type { NextPage } from 'next'

// 型推論より正しい値を意図的に上書きできる
const value: string | number = 'this is a string'
const strLength: number = (value as string).length

// 間違った型アサーションはしっかりエラーを出してくれる
const num = 123
const str: string = num as string
