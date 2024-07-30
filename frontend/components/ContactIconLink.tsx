import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Link from 'next/link';
import React from 'react'

const ContactIconLink = ({
    children,
    link,
  }: Readonly<{
    children: React.ReactNode;
    link: string;
  }>) => {
  return (
    <Grid
    container
    alignContent={'center'}
    justifyContent={'center'}
    >
      <Grid>
        <Link href={link}
          target="_blank" 
          rel="noopener noreferrer"
        
          style={{ 
            textDecoration: 'none', 
            color: 'inherit',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {children}
        </Link>
      </Grid>
    </Grid>
  )
}

export default ContactIconLink