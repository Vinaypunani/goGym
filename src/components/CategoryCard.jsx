import React from 'react'
import { Box, Typography  } from '@mui/material'
import categoryLogo from '../assets/images/category.webp'
import {useSelector } from 'react-redux'


const CategoryCard = ({category}) => {

    const selectedCategorie = useSelector((state)=>state.gym.selectedCategorie) 

  return (
        <Box
        sx={{
            width: { lg: '200px', md: '150px', sm: '100px', xs: '80px' },
            height: { lg: '200px', md: '150px', sm: '100px', xs: '80px' },
            backgroundColor: selectedCategorie === category ? '#dadada' : '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: { lg: '20px', md: '15px', sm: '10px', xs: '5px' },
            cursor: 'pointer',
            transition: 'all 0.3s linear',
        }}
        >
            <img src={categoryLogo} alt='category'
                style={{
                    width:'40%',
                    height:'40%',
                }}
            />

            <Typography
            sx={{
                fontSize: { lg: '20px', md: '16px', sm: '14px', xs: '12px' },
                fontWeight: 'bold',
                color: '#000',
            }}
            >
                {category}
            </Typography>
        </Box>
  )
}

export default CategoryCard