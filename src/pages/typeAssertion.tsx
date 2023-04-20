import type { NextPage } from 'next'

// 型推論より正しい値を意図的に上書きできる
const value: string | number = 'this is a string'
const strLength: number = (value as string).length

// 間違った型アサーションはしっかりエラーを出してくれる
const num = 123
const str1: string = num as string
// unknownを経由すると無理やり突破することもできる
const str2: string = num as unknown as string
