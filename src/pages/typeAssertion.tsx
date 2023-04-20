import type { NextPage } from 'next'

// 型推論より正しい値を意図的に伝えることができる
const value: string | number = 'this is a string'
const strLength: number = (value as string).length
