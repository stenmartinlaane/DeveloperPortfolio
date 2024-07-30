'use client'
import React from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Link from 'next/link';
import { Box } from '@mui/material';

const ContactIconCopy = ({
    children,
    text,
  }: Readonly<{
    children: React.ReactNode;
    text: string;
  }>) => {
    const handleCopyText = (text: string) => {
        navigator.clipboard.writeText(text)
    }

  return (
    <Grid
        container
        alignContent={'center'}
        justifyContent={'center'}
    >
      <Grid onClick={() => handleCopyText(text)}>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
            }}>
            {children}
        </Box>
      </Grid>
    </Grid>
  )
}

export default ContactIconCopy