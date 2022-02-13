import {
  AppBar,
  Container, createTheme,
  CssBaseline, ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material'

import CounterConnected from './components/CounterConnected'
import CounterHooked from './components/CounterHooked'
import List from './components/List'
import UsersList from './components/UsersList'

import './App.css'

const themeCustom = createTheme({
  palette: {
    background: {
      default: '#e4f0e2',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={themeCustom}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Test React app
          </Typography>
        </Toolbar>
      </AppBar>
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
    </ThemeProvider>
  )
}

export default App
