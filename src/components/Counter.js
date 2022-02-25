import React, { useState, useMemo, useEffect } from 'react'

const MIN_FLOOR = 0
const MAX_FLOOR = 5

const delay = async (ms) => new Promise(resolve => setTimeout(resolve, ms))

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const [quote, setQuote] = useState(null)

  const fetchQuote = async () => {
    const res = await fetch('https://cat-fact.herokuapp.com/facts')
    setQuote((await res.json())[0].text)
  }

  const floors = useMemo(() => (new Array(MAX_FLOOR + 1).fill(null)), []);

  const handleIncrease = _ => {
    setCounter(counter => Math.min(counter + 1, MAX_FLOOR))
  }
  const handleDecrease = _ => {
    setCounter(counter => Math.max(counter - 1, MIN_FLOOR))
  }

  const transition = async (targetFloor) => {
    let currentFloor = counter
    const dir = targetFloor > currentFloor ? 'up' : 'down'

    while (currentFloor !== targetFloor) {
      console.log(currentFloor)

      currentFloor = dir === 'up' ? currentFloor + 1 : currentFloor - 1
      setCounter(currentFloor)

      await delay(1000)
    }

    void fetchQuote()
  }

  return (
    <div style={{ margin: '0 20%' }}>
      <h1>Counter</h1>
      Current: {counter}
      <br /><br />

      <h2>Quote</h2>
      {quote && <blockquote>{quote}</blockquote>}

      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>

      <hr />

      {floors.map((_, index) =>
        <button key={index} onClick={_ => transition(index)}
                style={{ background: index === counter ? 'orange' : 'white' }}>
          {index}
        </button>
      )}
    </div>
  )
}

export default Counter




