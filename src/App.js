import React from 'react'

// theme and rtl config
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './settings/ThemeConfig'
import { RTLConfig } from './settings/RTLConfig'

// route config
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

// components
import NewPost from './posts/pages/NewPost'
import Users from './user/pages/Users'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RTLConfig>
        <Router>
          <Switch>
            <Route path='/' exact>
              <Users />
            </Route>
            <Route path='/posts/new' exact>
              <NewPost />
            </Route>
            <Redirect to='/' />
          </Switch>
        </Router>
      </RTLConfig>
    </ThemeProvider>
  )
}

export default App
