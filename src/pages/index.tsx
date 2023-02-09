import type { NextPage } from 'next'

const num = [1, 2]
num.push(3)
console.log(num)

const Home: NextPage = () => {
  return <div className="text-blue-500">Hello!</div>
}

export default Home
