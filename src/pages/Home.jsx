import React from 'react'
import { Box } from '@mui/material'
import Hero from '../components/Hero'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
  return (
    <Box>
      <Hero />
      <SearchExercises />
      <Exercises />
    </Box>
  )
}

export default Home