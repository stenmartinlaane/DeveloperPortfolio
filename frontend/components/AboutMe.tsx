import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'


const AboutMe = () => {
  return (
    <Stack spacing={2} justifyContent="center" height={"100%"}>
        <Typography variant='h2' component={'h1'} sx={{fontWeight: 'bold'}}>Hello, my name is Sten Martin Lääne</Typography>
        <Typography variant='h4' component={'h2'}>Fullstack developer</Typography>
    </Stack>
  )
}

export default AboutMe