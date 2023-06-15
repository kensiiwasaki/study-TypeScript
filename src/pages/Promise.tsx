import type { NextPage } from 'next'

// Promiseなし
// API1. 非同期でAPIにリクエストを送って値を取得する処理
function request1(callback) {
  setTimeout(() => {
    // 1 は適当な例、なんでもいいです
    callback(1)
  }, 1000)
}

// API2. 受け取った値を別のAPIにリクエストを送って値を取得する処理
function request2(result1, callback) {
  setTimeout(() => {
    callback(result1 + 1)
  }, 1000)
}

// API3. 受け取った値を別のAPIにリクエストを送って値を取得する処理
function request3(result2, callback) {
  setTimeout(() => {
    callback(result2 + 2)
  }, 1000)
}

request1((result1) => {
  request2(result1, (result2) => {
    request3(result2, (result3) => {
      console.log(result3)
      // @log: 4
    })
  })
})

// Promiseあり
/// 非同期でAPIにリクエストを投げて値を取得する処理
function request1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
}

// 受け取った値を別のAPIにリクエストを投げて値を取得する処理
function request2(result1) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result1 + 1)
    }, 1000)
  })
}

// 受け取った値を別のAPIにリクエストを投げて値を取得する処理
function request3(result2) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(result2 + 2)
    }, 1000)
  })
}

request1()
  .then((result1) => {
    return request2(result1)
  })
  .then((result2) => {
    return request3(result2)
  })
  .then((result3) => {
    console.log(result3)
    // @log: 4
  })

// Promiseとジェネリクス
// Promiseの型を絵指定する場合はジェネリクスを伴いPromise<T>と書く
// ジェネリクスの型を省略した場合はコンパイルエラーになる(型が合わない場合もコンパイルエラーになる)
type User = {
  name: string
  age: number
}

function getUser(): Promise<User> {
  return new Promise((resolve) => {
    const user: User = {
      name: '太郎',
      age: 10,
    }
    resolve(user)
  })
}

getUser().then((user: User) => {
  console.log(user)
  // @log: { "name": "太郎", "age": 10 }
})

// Promiseのメソッド
// 待ち受けた非同期処理の結果をコールバックで実行する
const promise1: Promise<number> = Promise.resolve(1)
const promise2: Promise<string> = promise1.then((value) => `${value}`)

// then()でメソッドチェーンできる
const promise: Promise<boolean> = Promise.resolve('1')
  .then((value) => Number(value)) // Promise<number>型になる
  .then((value) => value > 0) // Promise<boolean>型になる
