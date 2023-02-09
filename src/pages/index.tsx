import type { NextPage } from 'next'

const obj = { a: 1 }
obj.a = 2
console.log(obj)

const nums = [1, 2]
nums.push(3)
console.log(nums)

const Home: NextPage = () => {
  return <div className="text-blue-500">Hello!</div>
}

export default Home
