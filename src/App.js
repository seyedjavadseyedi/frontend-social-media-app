import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './settings/ThemeConfig'
import { RTLConfig } from './settings/RTLConfig'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RTLConfig></RTLConfig>
    </ThemeProvider>
  )
}

export default App
