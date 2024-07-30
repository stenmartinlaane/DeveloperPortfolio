import React from 'react'
import Header from './Header'
import { Box, Stack } from '@mui/material'
import ContactIcons from './ContactIcons'
import Grid from '@mui/material/Unstable_Grid2';
import Slider from './ThemeSlider/Slider';

const HeaderSection = () => {
  return (
    <Grid container wrap={'nowrap'} direction={'row'} alignItems={"center"} sx={{paddingTop: 2, paddingBottom: 10}}>
      <Grid xs={4}>
        <Box width={'100%'} height={'100%'}></Box>
      </Grid>
      <Grid container xs={4} justifyContent={'center'}>
        <Grid>
          <Header></Header>
        </Grid>
      </Grid>
      <Grid xs={4}>
        <Stack direction={'row'} justifyContent={'right'} paddingRight={6} spacing={3}>
          <ContactIcons></ContactIcons>
          <Slider></Slider>
        </Stack>
      </Grid>
    </Grid>
    
  )
}

export default HeaderSection