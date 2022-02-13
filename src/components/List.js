import { Card, CardContent, Typography } from '@mui/material'

function List({ items }) {
  return (
    <Card sx={{ minWidth: 275, marginBottom: '2rem' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          A simple list
        </Typography>
        <Typography variant="body2" component="div">
          <ul>{items.map((v) => <li key={v}>{v}</li>)}</ul>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default List
