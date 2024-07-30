import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import DownLoadCV from './DownLoadCV'

const AboutContactSection = () => {
  return (
    <Grid container direction={'column'} sx={{justifyContent: 'center', alignItems: 'center'}}>
        <Grid>
            <Typography variant='h2' component={'h2'} sx={{fontWeight: 'bold'}}>About</Typography>
        </Grid>
        <Grid>
            <Typography variant='h4' component={'h2'}>Email: stenmartinlaane@gmail.com</Typography>
        </Grid>
        <Grid>
            <DownLoadCV></DownLoadCV>
        </Grid>
    </Grid>
  )
}

export default AboutContactSection