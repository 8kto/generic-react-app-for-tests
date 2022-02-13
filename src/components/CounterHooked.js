import {
  Button,
  ButtonGroup, Card,
  CardActions,
  CardContent, Grid,
  Typography,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import { decrement, increment } from '../features/counter/counterSlice'

/**
 * @link https://react-redux.js.org/tutorials/quick-start
 */
function CounterHooked() {
  const state = useSelector(({ counter }) => counter)
  const dispatch = useDispatch()

  return (
    <Card sx={{ minWidth: 275, marginBottom: '2rem' }}>
      <Grid container spacing={2}>
        <Grid item sm={4} xs={12}>
          <CardContent>
            <Typography variant="h5" component="div">
              Counter hooked
            </Typography>
            <Typography variant="body2">
              <strong>Counter</strong>
              :
              {' '}
              {state.value}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item sm={8} xs={12} alignSelf="center">
          <CardActions>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              <Button
                onClick={() => dispatch(decrement())}
              >
                Decrement
              </Button>
              <Button
                onClick={() => dispatch(increment())}
              >
                Increment
              </Button>
            </ButtonGroup>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CounterHooked
