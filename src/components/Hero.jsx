import React from 'react'
import { Box, Typography, Button, Stack } from '@mui/material'
import HeroImage from '../assets/images/Hero.png'

const Hero = () => {
  return (
    <Box width="100%" height={{sm:'80vh', xs:'50vh'}} display="flex" position='relative'
      sx={{
        marginTop: {sm:'100px',xs:'70px'},
        padding: {sm:'80px',xs:'30px'},
        display:{sm:'flex',xs:'block'},
      }}
    >
      <Stack 
        direction={{md:'row',sm:'column'}}
      >
        <Stack>
          <Typography
            sx={{
              fontSize: {sm:'2rem',xs:'1rem'},
              fontWeight: 'bold',
              color: '#0073E6',
              paddingBottom: '30px',
            }}
          >
            Fitness Club
          </Typography>
          <Typography
          sx={{
            fontSize: {sm:'3rem',xs:'2rem'},
            fontWeight: 'bold',
            color: '#000',
            paddingBottom: '30px',
          }}
          >
            Sweat, Smile <br /> And Repeat
          </Typography>
          <Typography
          sx={{
            fontSize: {sm:'1.2rem',xs:'0.9rem'},
            color: '#000',
            paddingBottom: '30px',
          }}
          >
            Check out the most effective exercises
          </Typography>

          <Button variant="contained" color="primary"
            sx={{
              fontSize: {sm:'1.2rem',xs:'0.9rem'},
              padding: '10px 30px',
              width: '200px',
              background: '#39A6FF',
            }}
            href='#exercises'
          >
            Exercise
          </Button>
        </Stack>

          <Stack
          display={{md:'block',sm:'none',xs:'none'}}
          sx={{
            width: '50%',
            height: '100%',
            position: 'absolute',
            top: '-10%',
            right: '0',
            zIndex: '9',
          }}
          >
            <img src={HeroImage} alt='banner' 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'center',
            }}
            />
          </Stack>

          <Typography
          sx={{
            fontSize: {md:'10rem',sm:'8rem'},
            color: '#000',
            paddingBottom: '30px',
            position: 'absolute',
            bottom: '0',
            fontWeight: 'bold',
            color: '#0073E6',
            opacity: '0.2',
            display: {sm:'block',xs:'none'},
          }}
          >
            Exercise
          </Typography>
      </Stack>

      
    </Box>
  )
}

export default Hero