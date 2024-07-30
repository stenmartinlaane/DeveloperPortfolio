import React from 'react'
import HeaderSection from '@/components/HeaderSection';
import IntroSection from '@/components/IntroSection';
import { Container } from '@mui/material';
import ToggleColorMode from '@/components/ToggleColorMode';
import WorkSection from '@/components/WorkSection';


const page = () => {
  return (
    <ToggleColorMode>
      <HeaderSection></HeaderSection>
        <Container>
            <IntroSection></IntroSection>
            <WorkSection></WorkSection>
        </Container>
    </ToggleColorMode>
    
  )
}

export default page