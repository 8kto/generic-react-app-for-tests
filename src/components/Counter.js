import { useDispatch, useSelector } from 'react-redux'

import { decrement, increment } from '../features/counter/counterSlice'

function Counter() {
  const state = useSelector(({ counter }) => counter)
  const dispatch = useDispatch()

  return (
    <div className="counter">
      <strong>Counter</strong>
      :
      {' '}
      {state.value}
      <p>
        <button type="button" onClick={() => dispatch(increment())}>Increment</button>
        <button type="button" onClick={() => dispatch(decrement())}>Decrement</button>
      </p>
    </div>
  )
}

export default Counter
