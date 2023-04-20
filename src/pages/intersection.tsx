import type { NextPage } from 'next'

// ユニオン型は"どれか"に対してインターセクション型は"どれも"
type TwoDimensionalPoint = {
  x: number
  y: number
}
type Z = {
  z: number
}

type ThreeDimensionalPoint = TwoDimensionalPoint & Z
// そのため下記はエラーになる
const p: ThreeDimensionalPoint = {
  x: 0,
  y: 1,
}
