import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box,Typography,Stack } from '@mui/material'
import { fetchData,fetchOptions } from '../utills/fetchData'
import Details from '../components/Details'
import YoutubeVideos from '../components/YoutubeVideos'
import SuggestedExercise from '../components/SuggestedExercise'
import { useSelector,useDispatch } from 'react-redux'
import { setLoading } from '../features/gym/gymSlice'
import Loader from '../components/Loader'

const Exercises = () => {
  const {id} = useParams()

  const loading = useSelector((state)=>state.gym.loading)
  const dispatch = useDispatch()
  
  const [exerciseDetails, setExerciseDetails] = useState({})
  const exerciseDetail_API = 'https://exercisedb.p.rapidapi.com'

  useEffect(() => {

    dispatch(setLoading(true))

    const FetchExerciseDetails = async () =>{


        const ExerciseDetails = await fetchData(`${exerciseDetail_API}/exercises/exercise/${id}` , fetchOptions)
        setExerciseDetails(ExerciseDetails)
        dispatch(setLoading(false))
      }

      FetchExerciseDetails()
    }, [id])
    

  if(loading){
    return(
        <Loader />
    )
  }
  else{
    return (
      <Box>
        <Details exerciseDetails={exerciseDetails} />
        {/* <YoutubeVideos />
        <SuggestedExercise  /> */}
      </Box>
  )
}
}

export default Exercises