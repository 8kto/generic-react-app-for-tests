import { Container, Typography } from '@mui/material'
import React from 'react'

function MeetingFeed() {
  return (
    <Container maxWidth="md" sx={{ padding: '1rem' }}>
      <Typography
        component="h2"
        variant="h5"
        marginTop="1rem"
        marginBottom="1rem"
      >
        Meetings
      </Typography>

    </Container>
  )
}

export default MeetingFeed
