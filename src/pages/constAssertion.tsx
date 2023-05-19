import type { NextPage } from 'next'

// as constをつけることでプロパティをreadonlyにできる
const pikachu = {
  name: 'pikachu',
  no: 25,
  genre: 'mouse pokémon',
  height: 0.4,
  weight: 6.0,
} as const

// なので代入できない
pikachu.name = 'raichu'

// readonlyはプロパティごとにつけられるが、as constはオブジェクト全体に対する宣言
// const assertionは再起的にreadonlyにできる
// オブジェクトの中にオブジェクトがある場合などに役立つ
