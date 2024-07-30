import { Margin } from '@mui/icons-material';
import { Box } from '@mui/material';
import React from 'react'
import styled from "styled-components"; 

const ImageWrap = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

    const ImageWrap = styled.span`
  margin: 32px auto;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > span {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
  }
`;


  return (
    <Box >{children}</Box>
  )
}

export default ImageWrap