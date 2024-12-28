import React from 'react'
import { Box, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CategoryCard from './CategoryCard';
import categoryLogo from '../assets/images/category.webp'
import { setSelectedCategorie } from '../features/gym/gymSlice'
import { useDispatch, useSelector } from 'react-redux'

const Category = () => {

    const categories = useSelector((state)=>state.gym.categorie)
    const selectedCategorie = useSelector((state)=>state.gym.selectedCategorie) 
    const dispatch = useDispatch()

  return (
    <Box
    width={'100%'}
    p={{ lg: '0 80px', md: '0 40px', sm: '0 20px', xs: '0 10px' }}
    >

    <Typography
    sx={{
        fontSize: { lg: '38px', md: '32px', sm: '24px', xs: '20px' },
        fontWeight: 'bold',
        color: '#000',
        mb: { lg: '20px', md: '15px', sm: '10px', xs: '5px' },
        textAlign: 'center',
        marginBottom : {lg: '30px', md: '20px', sm: '10px', xs: '5px'}
    }}
    >
        Category
    </Typography>

    <Swiper
      spaceBetween={50}
      slidesPerView={4}
    >
    
    {
        categories.map((categorie,index)=>{
            return (
                <SwiperSlide key={index}
                onClick={() => {
                    dispatch(setSelectedCategorie(categorie))
                    window.scrollTo({top:1586, behavior: 'smooth'})
                }}
                >
                    <CategoryCard category={categorie} />
                </SwiperSlide>
            )
        })
    }
        
    </Swiper>

    </Box>
  )
}

export default Category