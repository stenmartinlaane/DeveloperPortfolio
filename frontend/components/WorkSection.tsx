import { Button, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import ProjectsDisplay from './ProjectsDisplay'

const WorkSection = () => {
  return (
    <>
        <Grid container paddingBottom={6}>
            <Grid xs={6}>
                <Typography variant='h3' component={'h2'} paddingBottom={4}>
                Projects
                </Typography>
                <Typography variant='h4' component={'p'}>
                    Take a look at some of featured projects.
                </Typography>
            </Grid>
            <Grid container justifyContent={'right'} xs={6}>
                <Button>View All</Button>
            </Grid>
        </Grid>
        <ProjectsDisplay></ProjectsDisplay>
    </>
  )
}

export default WorkSection