import React, { useEffect } from 'react'
import { Box, TextField, Stack, Typography, Button, selectClasses } from '@mui/material'
import { fetchData,fetchOptions } from '../utills/fetchData'
import { meta } from '@eslint/js'
import { setSearch,setSearchResult ,setCategorie} from '../features/gym/gymSlice'
import { useSelector,useDispatch } from 'react-redux'
import { use } from 'react'
import Category from './Category'
import { AllInbox } from '@mui/icons-material'


const SearchExercises = () => {

  const search = useSelector((state)=>state.gym.search)
  const searchResult = useSelector((state)=>state.gym.searchResult)
  const selectedCategorie = useSelector((state)=>state.gym.selectedCategorie)
  const dispatch = useDispatch() 


  useEffect(() =>{
    const exerciseCategories = async () => {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',fetchOptions)
      dispatch(setCategorie(["all" ,...exercisesData]))
    }
    exerciseCategories()  
  },[])
    
  
  const SearchHendler = async () => {
    
    const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=5000',fetchOptions)
    
    const result = exercisesData.filter((exercise) => (
      exercise.name.toLowerCase().includes(search) ||
      exercise.target.toLowerCase().includes(search) ||
      exercise.equipment.toLowerCase().includes(search) ||
      exercise.bodyPart.toLowerCase().includes(search)
    ));
    
    dispatch(setSearch(''))
    dispatch(setSearchResult(result))
  }
  
  useEffect(()=>{
    SearchHendler()
  },[selectedCategorie])

  return (
    
    <Box>
        <Stack
        justifyContent={'center'}
        alignItems={'center'}
        position={'relative'}
        py={{ lg: '100px', md: '80px', sm: '60px', xs: '40px' }}
      >
        <Typography
          sx={{
            fontSize: { lg: '38px', md: '32px', sm: '24px', xs: '20px' },
            fontWeight: 'bold',
            color: '#000',
            mb: { lg: '20px', md: '15px', sm: '10px', xs: '5px' }
          }}
        >
          Search Exercises
        </Typography>

        <Stack
          width="100%"
          direction='row'
          px={{ lg: '200px', md: '80px', sm: '40px', xs: '20px' }}
        >
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            placeholder='Search for exercises...'
            height={50}
            value={search}
            onChange={(e) => dispatch(setSearch(e.target.value.toLocaleLowerCase()))}
          />
          <Button variant="contained" color="primary"
            sx={{
              fontSize: { lg: '16px', md: '14px', sm: '12px' },
              padding: '10px 30px',
              width: { lg: '170px', md: '150px', sm: '130px' },
              background: '#39A6FF',
            }}

            onClick={() => SearchHendler()}
          >
            Search
          </Button>
        </Stack>

      </Stack>

        <Category />
    </Box>

  )
}

export default SearchExercises