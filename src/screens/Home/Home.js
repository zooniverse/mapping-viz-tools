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
          size: mobile ? 'medium' : 'large',
        }}
      />

      <Box
        gap='medium'
        justify={mobile ? '' : 'between'}
        margin={mobile ? 'medium' : 'large'}
      >
        <Box width={{ max: '40rem' }}>
          <ZooniverseLogotype />
          <MappingVizLogo id='MappingVizualizationsLogo' />
        </Box>

        <Box direction={mobile ? 'column' : 'row'}>
          <Box basis='2/3' flex='grow' pad={mobile ? null : { right: 'medium' }}>
            <ChooseLocation />
          </Box>
          <Box
            basis='1/3'
            border={mobile ? null : 'left'}
            flex='grow'
            gap='small'
            pad={mobile ? null : { left: 'medium' }}
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
