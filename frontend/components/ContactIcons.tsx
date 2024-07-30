import React from 'react'
import { GitHub, LinkedIn, Email } from '@mui/icons-material'
import ContactIconLink from './ContactIconLink'
import { Stack } from '@mui/material'
import ContactIconCopy from './ContactIconCopy'

const ContactIcons = () => {
  return (
    <Stack justifyContent={'center'} alignContent={'center'} spacing={2} direction={'row'} height={'full'}>
        <ContactIconLink link='https://github.com/stenmartinlaane'><GitHub></GitHub></ContactIconLink>
        <ContactIconLink link='https://www.linkedin.com/in/sten-martin-l%C3%A4%C3%A4ne-8b7875266/'><LinkedIn></LinkedIn></ContactIconLink>
        <ContactIconCopy text='stenmartinlaane@gmail.com'><Email></Email></ContactIconCopy>
    </Stack>


  )
}

export default ContactIcons