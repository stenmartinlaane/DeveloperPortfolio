'use client'
import { Paper, Typography } from '@mui/material'
import React from 'react'
import styled from "styled-components"; 
import Image from 'next/image'
import Link from 'next/link';

const ImageWrap = styled.span`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > span {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const ProjectPaper = ({name, link, src, alt }: {name: string, link: string, src: string, alt: string}) => {
  return (
    <Link href={link}>
        <Paper sx={{position: 'relative', display: 'inline-block', borderRadius: '10px', overflow:'hidden'}}>
            <Paper sx={{ position: 'absolute', top: '10px', left: '10px', borderRadius: '10px', padding: 0, margin: 0}}>
                <Typography variant='h4' component={'h3'}>{name}</Typography>
            </Paper>
            <ImageWrap style={{height: 300}}>
                <Image 
                alt={alt}
                    src={`/${src}`}
                    width={1024}
                    height={1024}
                    quality={100}
                    style={{ width: '100%', height: '100%', objectFit: 'cover'}}
                >
                </Image>
            </ImageWrap>
        </Paper>
    </Link>
   
  )
}

export default ProjectPaper