import React from 'react'
import ProjectPaper from './ProjectPaper'
import Grid from '@mui/material/Unstable_Grid2/Grid2'



const ProjectsDisplay = () => {
  return (
    <Grid container spacing={6}>
        <Grid xs={6}>
            <ProjectPaper name="Developer Portfolio" link='' src='DevelperPotrfolio.png' alt='Picture of developer portfolio'></ProjectPaper>
        </Grid>
        <Grid xs={6}>
            <ProjectPaper name="Developer Portfolio" link='' src='DevelperPotrfolio.png' alt='Picture of developer portfolio'></ProjectPaper>
        </Grid>
    </Grid>
  )
}

export default ProjectsDisplay