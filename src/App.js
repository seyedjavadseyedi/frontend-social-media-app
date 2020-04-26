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
import MainNavigation from './shared/components/navigation/MainNavigation'
import NewPost from './posts/pages/NewPost'
import Users from './user/pages/Users'
import UserPosts from './posts/pages/UserPosts'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RTLConfig>
        <Router>
          <MainNavigation />
          <Switch>
            <Route path='/' exact>
              <Users />
            </Route>
            <Route path='/:userId/posts' exact>
              <UserPosts />
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
