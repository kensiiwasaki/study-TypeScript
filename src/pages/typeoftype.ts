import type { NextPage } from 'next'

// typeof型演算子 (typeof演算子とは全く別物なので注意)
// 変数から型を抽出することができる
const point = { x: 135, y: 35 }
type Point = typeof point
