import React from 'react'
import { Box ,Typography,Stack } from '@mui/material'
import bodyPartImage from '../assets/images/bodyPart.webp'
import equipmentImage from '../assets/images/equipment.png'
import targetImage from '../assets/images/target.png'

const Details = ({exerciseDetails}) => {

    const {name , bodyPart, gifUrl, target ,equipment, instructions} = exerciseDetails

  return (
    <Stack
        width={'100%'}
        sx={{
            flexDirection:{lg:'row'},
            justifyContent:'center',
            alignContent:'center'
        }}
    >

        <Box
            width={{lg:'50%',md:'100%'}}
        >
            <img
            style={{
                width:'100%',
            }}
            src={gifUrl}  alt={name} loading='lazy'/>
        </Box>

        <Stack
            width={'100%'}
            sx={{
                width:{lg:'50%'},
                alignContent:'center',
                justifyContent:'flex-start',
                px:{lg:'80px', md:'50px',xs:'30px'},
                height:'100%',
                mt:{lg:'100px',md:'50px'},
                gap:'50px'
            }}
        >
            <Typography
            sx={{
                fontSize:'33px',
                textTransform:'capitalize',
                fontWeight:600
            }}
            >
                {name}
            </Typography>

            <Typography>
                {instructions}
            </Typography>

            <Stack>
                <Typography
                    sx={{
                        display:'flex',
                        alignItems:'center',
                        gap:'20px',
                        fontSize:{lg:'24px',md:'18px'}
                    }}
                >
                    <img src={bodyPartImage} alt={bodyPart} 
                    style={{
                        width:'80px'
                    }}
                    />

                    {bodyPart}
                </Typography>
                <Typography
                    sx={{
                        display:'flex',
                        alignItems:'center',
                        gap:'20px',
                        fontSize:{lg:'24px',md:'18px'}
                    }}
                >
                    <img src={targetImage} alt={target} 
                    style={{
                        width:'80px'
                    }}
                    />

                    {target}
                </Typography>
                <Typography
                    sx={{
                        display:'flex',
                        alignItems:'center',
                        gap:'20px',
                        fontSize:{lg:'24px',md:'18px'}
                    }}
                >
                    <img src={equipmentImage} alt={equipment} 
                    style={{
                        width:'80px'
                    }}
                    />

                    {equipment}
                </Typography>
            </Stack>

        </Stack>
    </Stack>
  )
}

export default Details