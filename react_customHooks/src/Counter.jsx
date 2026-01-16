import React from 'react'
import useCounter from './custom-hooks/useCounter';

const Counter = () => {
  const {count, increment, decrement, reset} = useCounter(10);

  return (
    <>
      <h1>Custom Hooks</h1>
      <p>Count: {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>reset</button>
        <hr />
    </>
  )
}

export default Counter