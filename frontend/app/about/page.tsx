import AboutContactSection from '@/components/AboutContactSection'
import HeaderSection from '@/components/HeaderSection'
import ToggleColorMode from '@/components/ToggleColorMode'
import { Container } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <ToggleColorMode>
    <HeaderSection></HeaderSection>
    <Container>
      <AboutContactSection></AboutContactSection>
    </Container>
    </ToggleColorMode>
  )
}

export default page