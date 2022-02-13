import { add } from './usersSlice'

/**
 * @link https://redux.js.org/usage/writing-logic-thunks
 */
export const fetchUsers = () => async (dispatch) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json();

  dispatch(add(users))
}
