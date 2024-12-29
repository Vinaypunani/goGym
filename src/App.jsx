import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Exercises from './pages/Exercise'
import Footer from './components/Footer'
import { Box } from '@mui/material'


const App = () => {

    return (
      <Box width={"400px"} sx={{width:{xl:"1488px"}}} m="auto">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exercise/:id' element={<Exercises />} />
        </Routes>
        <Footer />
      </Box>
    )
}

export default App