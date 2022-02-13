import DeleteIcon from '@mui/icons-material/Delete';
import {
  ButtonGroup, Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material'
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux'

import { fetchUsers } from '../features/users/fetchUsersThunk'
import { clear, remove } from '../features/users/usersSlice'

function UsersList() {
  const items = useSelector(({ users }) => users.users)
  const dispatch = useDispatch()

  return (
    <Card sx={{ minWidth: 275, marginBottom: '2rem' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Thunks
        </Typography>
        <Typography variant="body2">
          <ul>
            {items.map((user) => (
              <li key={user.id}>
                <p>
                  {user.name}
                  {' '}
                  <IconButton
                    size="small"
                    onClick={() => {
                      dispatch(remove(user.id))
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </p>
              </li>
            ))}
          </ul>
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button
            variant="contained"
            onClick={() => {
              dispatch(clear())
              dispatch(fetchUsers())
            }}
          >
            Load users
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  )
}

export default UsersList
