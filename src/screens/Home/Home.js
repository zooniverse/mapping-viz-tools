import React from 'react'
import { Anchor, Box, Image, Text } from 'grommet'
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
    <Box background='sand' direction='row' fill>
      <Box basis='1/4' fill>
        <Image fit='cover' src={Kelp} />
      </Box>

      <Box
        basis='3/4'
        border={{
          color: 'kelp',
          side: 'left',
          size: 'large'
        }}
        pad={{ horizontal: 'medium', top: 'large' }}
      >
        <Box>
          <ResponsiveImage width={{ max: 'small' }} src={Zooniverse} />
          <ResponsiveImage margin={{ right: 'xlarge' }}  src={Title} />
        </Box>

        <Box direction='row' justify='between'>
          <Box
            border={{ color: 'kelp', side: 'right' }}
            fill='horizontal'
            pad={{ vertical: 'medium' }}
          >
            <ChooseLocation />
          </Box>
          <Box
            gap='small'
            margin="medium"
            width='small'
          >
            <StyledText size='1.15rem'>
              This project is a collaboration between Zooniverse-Adler Planetarium and the Floating Forests team.
            </StyledText>
            <Anchor href="#" label="Learn More" size='small' />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
