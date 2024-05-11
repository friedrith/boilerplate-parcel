import { use } from 'react'

let cache = null

const promise = () =>
  new Promise<void>(resolve => {
    if (cache) return resolve(cache)
    console.log('start')
    setTimeout(() => {
      cache = 'foo'
      console.log(cache)
      resolve(cache)
    }, 5000)
  })

export default function Async() {
  const data = use(promise())

  console.log('render')

  return <div>Async {data}</div>
}
