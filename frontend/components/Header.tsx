import React from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import ContactIcons from './ContactIcons';
import Link from 'next/link';

const Header = () => {
  return (
    <Paper elevation={3} sx={{padding: 1, display: 'inline-flex'}}>
        <Grid container spacing={2} sx={{display: 'inline-flex'}}>
          <Grid>
            <Link href={'/'}>
              <Button variant="contained" size='small'>Home</Button>
            </Link>
          </Grid>
          <Grid>
            <Link href={'/projects'}>
              <Button variant="contained" size='small'>Projects</Button>
            </Link>
          </Grid>
          <Grid>
            <Link href={'/about'}>
              <Button variant="contained" size='small'>About</Button>
            </Link>
          </Grid>
        </Grid>
    </Paper>
  )
}

export default Header