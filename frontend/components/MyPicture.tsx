'use client'
import Image from 'next/image'
import React from 'react'
import styled from "styled-components"; 

const ImageWrap = styled.span`
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

const MyPicture = ({ alt, src, width, height }: {alt: string, src: string, width: string, height: string}) => {
  return (
    <ImageWrap style={{height: 640}}>
      <Image 
      alt={alt}
          src={`/${src}`}
          width={1024}
          height={1024}
          quality={100}
          style={{ width: '100%', height: '100%', borderRadius: '10%', objectFit: 'cover' }}
      >
      </Image>
    </ImageWrap>
  )
}

export default MyPicture