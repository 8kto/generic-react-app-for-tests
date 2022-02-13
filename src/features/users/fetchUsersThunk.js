import { add } from './usersSlice'

export const fetchUsers = () => async (dispatch) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json();

  dispatch(add(users))
}
