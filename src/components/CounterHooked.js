import { useDispatch, useSelector } from 'react-redux'

import { decrement, increment } from '../features/counter/counterSlice'

/**
 * @link https://react-redux.js.org/tutorials/quick-start
 */
function CounterHooked() {
  const state = useSelector(({ counter }) => counter)
  const dispatch = useDispatch()

  return (
    <div className="counter">
      <strong>Counter hooked</strong>
      :
      {' '}
      {state.value}
      <p>
        <button type="button" onClick={() => dispatch(decrement())}>Decrement</button>
        <button type="button" onClick={() => dispatch(increment())}>Increment</button>
      </p>
    </div>
  )
}

export default CounterHooked
