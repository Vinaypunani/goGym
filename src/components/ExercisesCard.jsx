import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import { Link } from 'react-router-dom'

const ExercisesCard = ({ exercise }) => {
    return (
        <Link
            id={exercise.id}
            to={`/exercise/${exercise.id}`}
            style={{
                textDecoration: 'none',
                color: '#000',
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                borderRadius: '10px',
            }}
        >
            <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />

            <Stack
                direction='row'
                alignItems='center'
                gap={'40px'}
                justifyContent={'center'}
                my={'20px'}
            >
                 <Typography variant='h6'
                     sx={{
                        color: '#39A6FF',
                        backgroundColor: '#dadada',
                        padding: '5px 10px',
                        borderRadius: '15px'
                    }}
                >
                    {exercise.bodyPart}
                </Typography>

                <Typography variant='h6'
                    sx={{
                        backgroundColor: '#39A6FF',
                        color: '#fff',
                        padding: '5px 10px',
                        borderRadius: '15px'
                    }}
                >
                    {exercise.target}
                </Typography>
               
            </Stack>

            <Typography variant='h5'
                textTransform={'capitalize'}

                sx={{
                    fontSize: { lg: '24px', md: '20px', sm: '18px', xs: '16px' },
                    fontWeight: 'bold',
                    color: '#000',
                    mb: { lg: '20px', md: '15px', sm: '10px', xs: '5px' },
                    width: '100%',
                }}
            >
                {exercise.name}
            </Typography>
        </Link>
    )
}

export default ExercisesCard