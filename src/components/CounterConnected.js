import { connect } from 'react-redux'

import { decrement, increment } from '../features/counter/counterSlice'

/**
 * @link https://react-redux.js.org/tutorials/connect
 */
function CounterConnected({ counter, dispatch }) {
  return (
    <div className="component counter">
      <strong>Counter connected</strong>
      :
      {' '}
      {counter}
      <p>
        <button type="button" onClick={() => dispatch(decrement())}>Decrement</button>
        <button type="button" onClick={() => dispatch(increment())}>Increment</button>
      </p>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  counter: state.counter.value,
  ...ownProps,
})

// const mapDispatchToProps = {
//   increment: counterSlice.increment,
//   decrement: counterSlice.decrement,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CounterConnected)
export default connect(mapStateToProps)(CounterConnected)
