import React from 'react'
import { Box, Image, Text } from 'grommet'
import Kelp from 'images/kelp.png'
import Title from 'images/title.svg'
import Zooniverse from 'images/zooniverse.png'
import ResponsiveImage from 'components/ResponsiveImage'
import styled from 'styled-components'
import ChooseLocation from './components/ChooseLocation'

const StyledText = styled(Text)`
  font-family: Neuton;
`

export default function Home() {
  return (
    <Box background='sand' direction='row'>
      <Box
        basis='1/4'
        border={{ color: 'kelp', side: 'right', size: 'large' }}
      >
        <Image fit='cover' src={Kelp} />
      </Box>

      <Box gap='medium'>
        <Box
          margin={{ horizontal: 'medium', top: 'large' }}
          width={{ max: '40rem' }}
        >
          <ResponsiveImage height='1.25rem' src={Zooniverse} />
          <ResponsiveImage src={Title} />
        </Box>

        <Box
          direction='row'
          margin={{ horizontal: 'medium' }}
          width={{ max: '50rem' }}
          wrap
        >
          <Box
            basis='3/4'
            flex='grow'
            margin={{ right: 'xsmall' }}
          >
            <ChooseLocation />
          </Box>
          <Box
            basis='10rem'
            border='left'
            flex='grow'
            pad='medium'
          >
            <StyledText size='1rem'>
              This project is a collaboration between Zooniverse-Adler Planetarium
              and the Floating Forests team.
            </StyledText>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
