import React from 'react'
import { HeroImage } from '../../assets'
import { Box, Button, Stack, Typography } from '@mui/material'

const Hero = () => {
  return (
    <Box  minHeight="95vh" style={{ marginTop: "4rem" }}>
        <Stack direction={{ xs: "column", md: "row" }} sx={{marginTop: 12}} >
            <Box flex={1} >
               <img src={HeroImage} alt="hero" style={{height: 600, width: 600}} width='auto' />
            </Box>
            <Box style={{width: '50%'}} >
                <Typography variant="h1" sx={{ fontWeight: 600, mb: 8 }}>
                    EduCompanio
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 400, mb: 4, pr: 5 }}>
                    EduCompanio is a platform that helps you to find the best resources for your career development and growth in college.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                    Sign Up
                </Button>
            </Box>
        </Stack>
    
    </Box>

  )
}

export default Hero