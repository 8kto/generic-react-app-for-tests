import {
  AppBar,
  Box,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Toolbar,
} from '@mui/material'
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom'

import IndexPage from './pages/Index'
import MeetingFeedPage from './pages/MeetingFeed'

import './App.css'

const themeCustom = createTheme({
  palette: {
    background: {
      default: '#e4f0e2',
    },
  },
})

function App() {
  return (
    <Router>
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
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                typography: 'body1',
                '& > :not(style) + :not(style)': {
                  ml: 2,
                },
              }}
            >
              <Link to="/">Home</Link>
              <Link to="/meetings">Meetings</Link>
            </Box>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<IndexPage />}>Test</Route>
          <Route path="/meetings" element={<MeetingFeedPage />}>Test</Route>
        </Routes>

      </ThemeProvider>
    </Router>
  )
}

export default App
