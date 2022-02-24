import DeleteIcon from '@mui/icons-material/Delete'
import {
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'
import Button from '@mui/material/Button'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'
import * as React from 'react'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchUsers } from '../features/users/fetchUsersThunk'
import { clear, remove } from '../features/users/usersSlice'

function UsersList() {
  const items = useSelector(({ users }) => users.users)
  const dispatch = useDispatch()
  const actions = useCallback((params) => [
    <GridActionsCellItem
      icon={<DeleteIcon />}
      label="Delete"
      onClick={() => dispatch(remove(params.id))}
    />], [])

  const columns = [
    { field: 'id', headerName: 'Id' },
    { field: 'username', headerName: 'Username' },
    { field: 'phone', headerName: 'Phone' },
    { field: 'email', headerName: 'Email' },
    { field: 'website', headerName: 'Website' },
    {
      field: 'actions',
      type: 'actions',
      width: 80,
      getActions: actions,
    },
  ]

  return (
    <Card sx={{ minWidth: 275, marginBottom: '2rem' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Thunks
        </Typography>
        <Typography variant="body2" component="div">
          <DataGrid
            autoHeight
            rows={items}
            columns={columns}
          />
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
