import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box,Typography,Stack } from '@mui/material'
import { fetchData,fetchOptions } from '../utills/fetchData'
import Details from '../components/Details'
import YoutubeVideos from '../components/YoutubeVideos'
import SuggestedExercise from '../components/SuggestedExercise'

const Exercises = () => {
  const {id} = useParams()
  
  const [exerciseDetails, setExerciseDetails] = useState({})
  const exerciseDetail_API = 'https://exercisedb.p.rapidapi.com'

  useEffect(() => {

    const FetchExerciseDetails = async () =>{
        const ExerciseDetails = await fetchData(`${exerciseDetail_API}/exercises/exercise/${id}` , fetchOptions)
        setExerciseDetails(ExerciseDetails)
        
      }

      FetchExerciseDetails()
    }, [id])
    

  return (
      <Box>
        <Details exerciseDetails={exerciseDetails} />
        <YoutubeVideos />
        <SuggestedExercise  />
      </Box>
  )
}

export default Exercises