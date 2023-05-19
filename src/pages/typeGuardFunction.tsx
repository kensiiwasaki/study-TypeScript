import type { NextPage } from 'next'

// ユーザ独自の型ガード
function isDuck(animal: Animal): animal is Duck {
  return animal instanceof Duck
}
