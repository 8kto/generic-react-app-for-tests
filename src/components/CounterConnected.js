import {
  Button,
  ButtonGroup, Card,
  CardActions,
  CardContent, Grid,
  Typography,
} from '@mui/material'
import { connect } from 'react-redux'

import { decrement, increment } from '../features/counter/counterSlice'

/**
 * @link https://react-redux.js.org/tutorials/connect
 */
function CounterConnected({ counter, dispatch }) {
  return (
    <Card sx={{ minWidth: 275, marginBottom: '2rem' }}>
      <Grid container spacing={2}>
        <Grid item sm={4} xs={12} alignSelf="center">
          <CardContent>
            <Typography variant="h5" component="div">
              Counter connected
            </Typography>
            <Typography variant="body2">
              <strong>Counter</strong>
              :
              {' '}
              {counter}
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
