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

// コールバック内で例外を投げるとそのPromiseは拒否される
// コールバック内で拒否されたPromiseを返しても同様
Promise.resolve(1)
  .then(() => {
    throw new Error()
  })
  .then(() => {
    console.log('fulilled')
  })
  .catch(() => {
    console.log('rejected')
  }) // 'reject'

// 待ち受けた非同期処理の拒否の結果をコールバックで実行する
const promise1: Promise<number> = Promise.reject(new Error())
const promise2: Promise<string> = promise1.catch((e) => e.message)

// 大体の場合でthen()のあとにcatch()を書く
Promise.resolve(1)
  .then((num: number) => {
    return `${num}`
  })
  .then((str: string) => {
    return str.length > 1
  })
  .catch((e: any) => {
    console.log(e.message)
  })

// 待ち受けた非同期処理が終了次第コールバックを実行する
// コールバックに引数はなく、メソッドに戻り値をしていできない

// Promiseの静的メソッド
// 全ての非同期処理の結果を待ち受ける
function request1(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1)
    }, 4000)
  })
}

function request2(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2)
    }, 2000)
  })
}

function request3(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(3)
    }, 1000)
  })
}

Promise.all([request1(), request2(), request3()]).then(([num1, num2, num3]) => {
  console.log(num1, num2, num3)
  // @log: 1, 2, 3
})

// 一つでも拒否された場合Promise.all()は拒否される
// 拒否された場合は一番早く終わった例外がreturnされる

// 履行されたPromiseを返す
