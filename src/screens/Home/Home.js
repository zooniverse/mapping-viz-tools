import React from 'react'
import { Anchor, Box, Text } from 'grommet'
import MappingVizLogo from 'components/MappingVizLogo'
import styled from 'styled-components'
import ChooseLocation from './components/ChooseLocation'
import {
  ZooniverseLogotype,
  withResponsiveContext,
} from '@zooniverse/react-components'

const StyledText = styled(Text)`
  font-family: Neuton;
`

const Home = ({ screenSize }) => {
  const mobile = screenSize === 'small'

  return (
    <Box background='sand' direction='row' height={{ min: '100%' }}>
      <Box
        basis='1/4'
        background={{ image: 'url(/kelp.png)' }}
        border={{
          color: 'kelp',
          side: 'right',
          size: mobile ? 'small' : 'large',
        }}
      />

      <Box gap='medium' justify={mobile ? '' : 'between'}>
        <Box
          margin={{ horizontal: 'medium', top: 'large' }}
          width={{ max: '40rem' }}
        >
          <ZooniverseLogotype />
          <MappingVizLogo id='MappingVizualizationsLogo' />
        </Box>

        <Box
          direction={mobile ? 'column' : 'row'}
          margin={{ horizontal: 'medium' }}
        >
          <Box basis='2/3' flex='grow' margin={{ right: 'xsmall' }}>
            <ChooseLocation />
          </Box>
          <Box
            basis='1/3'
            border={mobile ? null : 'left'}
            flex='grow'
            gap='small'
            pad={mobile ? '' : 'medium'}
          >
            <StyledText size='1rem'>
              This project is a collaboration between Zooniverse-Adler
              Planetarium and the Floating Forests team.
            </StyledText>
            <Anchor href='#' label='Learn more' size='small' />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default withResponsiveContext(Home)
