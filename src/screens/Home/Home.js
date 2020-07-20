import React from 'react'
import { Anchor, Box, Text } from 'grommet'
import MappingVizLogo from 'components/MappingVizLogo'
import styled from 'styled-components'
import ChooseLocation from './components/ChooseLocation'
import { ZooniverseLogotype } from '@zooniverse/react-components'

const StyledText = styled(Text)`
  font-family: Neuton;
`

export default function Home() {
  return (
    <Box background='sand' direction='row'>
      <Box
        basis='1/4'
        background={{ image: 'url(/kelp.png)' }}
        border={{ color: 'kelp', side: 'right', size: 'large' }}
      />

      <Box gap='medium'>
        <Box
          margin={{ horizontal: 'medium', top: 'large' }}
          width={{ max: '40rem' }}
        >
          <ZooniverseLogotype />
          <MappingVizLogo id='MappingVizualizationsLogo' />
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
            gap='small'
            pad='medium'
          >
            <StyledText size='1rem'>
              This project is a collaboration between Zooniverse-Adler Planetarium
              and the Floating Forests team.
            </StyledText>
            <Anchor
              href='#'
              label='Learn more'
              size='small'
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
