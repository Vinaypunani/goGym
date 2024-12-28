import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box,Stack,Button,Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import ExercisesCard from './ExercisesCard'

const Exercises = () => {
  const searchResult = useSelector((state)=>state.gym.searchResult)
  const selectedCategorie = useSelector((state)=>state.gym.selectedCategorie)

  const [currentPage, setCurrentPage] = useState(1)
  const exercisePerPage = 18

  const indexOfLastExercise = currentPage * exercisePerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage

  const pageHeandler = (event, value) => {
    setCurrentPage(value)
    window.scrollTo({top:1400, behavior: 'smooth'})
  }


  return (
    <Box
      id='exercises'
      sx={{
        width: '100%',
        p: { lg: '60px', md: '40px', sm: '20px', xs: '10px' },
        textAlign: 'center'
      }}
    >
      <Typography
        variant='h4'
        sx={{
          fontSize: { lg: '38px', md: '32px', sm: '24px', xs: '20px' },
          fontWeight: 'bold',
          color: '#000',
          mb: { lg: '60px', md: '50px', sm: '30px', xs: '15px' }
        }}
      >
        Search Result
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            lg: 'repeat(3, 1fr)',
            md: 'repeat(2, 1fr)',
            sm: 'repeat(1, 1fr)'
          },
          gap: { lg: '30px', md: '20px', sm: '10px', xs: '5px' }
        }}
      >

        {searchResult.map((exercise, index) => (
            <ExercisesCard key={index} exercise={exercise} />
          )).splice(indexOfFirstExercise, exercisePerPage)
        }


      </Box>

      <Stack>
        {
          searchResult.length > 9 && (
            <Pagination
              count={Math.ceil(searchResult.length / exercisePerPage)}
              color='primary'
              size='large'
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: '30px'
              }}
              onChange={pageHeandler}
              page={currentPage}
            />
          )
        }
      </Stack>
    </Box>
  );
}

export default Exercises