import HeaderSection from '@/components/HeaderSection'
import ToggleColorMode from '@/components/ToggleColorMode'
import WorkSection from '@/components/WorkSection'
import { Container } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <ToggleColorMode>
    <HeaderSection></HeaderSection>
    <Container>
      <WorkSection></WorkSection>
    </Container>
    </ToggleColorMode>
  )
}

export default page