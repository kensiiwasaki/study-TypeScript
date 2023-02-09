import type { NextPage } from 'next'

// const obj = { a: 1 }
// obj.a = 2
// console.log(obj)
let obj: {
  readonly a: number
}
obj = { a: 1 }

// const nums = [1, 2]
// nums.push(3)
// console.log(nums)

const nums: readonly number[] = [1, 2, 3]

const Home: NextPage = () => {
  return <div className="text-blue-500">Hello!</div>
}

export default Home
