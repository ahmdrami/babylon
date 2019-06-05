import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Header from './containers/Header'

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </div>
  )
}

export default App
