import { Box, CssBaseline } from '@mui/material'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import React from 'react'
import MainContainer from './components/MainContainer'

function App() {


  return (
    <React.Fragment>
      <CssBaseline>
        <BrowserRouter>
          <Header />
          <Box sx={styles.container}>
            <MainContainer />
          </Box>
        </BrowserRouter>
      </CssBaseline>
    </React.Fragment>
  )
}

export default App

/** @type {import("@mui/material").SxProps} */
const styles = {
  container: {
    display: 'flex',
    height: 'calc(100% - 64px)'
  }
}