import { PictureAsPdf } from '@mui/icons-material'
import { Box, Paper, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Link from 'next/link'
import React from 'react'

const DownLoadCV = () => {
  return (
    <>
        <Link href={'/CV.pdf'}
        target="_blank" 
        rel="noopener noreferrer">
            <Paper sx={{position: "relative", background: "red", width: 100, height: 100}}>
                <Grid container direction={'row'} position={"absolute"} sx={{transform:'translate(-50%, -50%)', top: '50%', left: '50%', width: '100%', padding: 0, display: 'inline-flex', background: "blue"}}>
                    <Grid xs={6}>
                        <Typography variant='h4' component={'p'}>CV</Typography>
                    </Grid>
                    <Grid xs={6}>
                        <PictureAsPdf></PictureAsPdf>
                    </Grid>
                
                </Grid>
            </Paper>
        </Link>
    </>
  )
}

export default DownLoadCV