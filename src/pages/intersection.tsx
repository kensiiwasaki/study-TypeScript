import type { NextPage } from 'next'

// ユニオン型は"どれか"に対してインターセクション型は"どれも"
type TwoDimensionalPoint = {
  x: number
  y: number
}

const twoDimensionalPoint: TwoDimensionalPoint = { x: 1 }
