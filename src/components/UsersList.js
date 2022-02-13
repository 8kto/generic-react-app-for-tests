import { useDispatch, useSelector } from 'react-redux'

import { fetchUsers } from '../features/users/fetchUsersThunk'
import { clear, remove } from '../features/users/usersSlice'

function UsersList() {
  const items = useSelector(({ users }) => users.users)
  const dispatch = useDispatch()

  return (
    <div className="component users-list">
      <strong>Thunks</strong>

      <p>
        <button
          type="button"
          onClick={() => {
            dispatch(clear())
            dispatch(fetchUsers())
          }}
        >
          Load users
        </button>
      </p>

      <ul>
        {items.map((user) => (
          <li key={user.id}>
            <p>
              {user.name}
              {' '}
              <input
                type="button"
                onClick={() => {
                  dispatch(remove(user.id))
                }}
                value="X"
              />
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersList
