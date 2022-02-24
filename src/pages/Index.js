import { Container, Typography } from '@mui/material'
import React from 'react'

import CounterConnected from '../components/CounterConnected'
import CounterHooked from '../components/CounterHooked'
import List from '../components/List'
import UsersList from '../components/UsersList'

function Index() {
  return (
    <Container maxWidth="md" sx={{ padding: '1rem' }}>
      <Typography
        component="h2"
        variant="h5"
        marginTop="1rem"
        marginBottom="1rem"
      >
        Redux
      </Typography>
      <CounterHooked />
      <CounterConnected />

      <Typography
        component="h2"
        variant="h5"
        marginTop="1rem"
        marginBottom="1rem"
      >
        Components
      </Typography>
      <UsersList />
      <List items={['Test 1', 'Test 2']} />
    </Container>
  )
}

export default Index
