import { useState } from 'react'
import './App.css'
import { useCounterStore } from './store'

function App() {
  const count = useCounterStore((state) => state.count)

  return <OtherComponent count={count}></OtherComponent>
}

const OtherComponent = ({ count } : { count: number }) => {
  const increment = useCounterStore((state) => state.increment)
  const decrement = useCounterStore((state) => state.decrement)
  return (
    <>
      {count}
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  )
}

export default App
