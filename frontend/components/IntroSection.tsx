import React from 'react'
import AboutMe from './AboutMe'
import MyPicture from './MyPicture'
import { Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';

const IntroSection = (props: any) => {
  return (
    <Box sx={{marginBottom: 10}}>
        <Grid container spacing={6} sx={{display: 'inline-flex'}}>
          <Grid xs={6}>
            <AboutMe></AboutMe>
          </Grid>
          <Grid xs={6}>
            <MyPicture alt={'Picture of Sten Martin'} src={'PictureOfMe.jpg'} width={'100%'} height={'100%'}></MyPicture>
          </Grid>
        </Grid>
    </Box>
    
    
  )
}

export default IntroSection