import React from 'react'
import { Anchor, Box, Grid, Image, Text } from 'grommet'
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
      <Grid
        areas={[
          { name: 'banner', start: [0, 0], end: [0, 1] },
          { name: 'intro', start: [1, 0], end: [1, 1] },
          { name: 'body', start: [1, 1], end: [1, 1] }
        ]}
        rows={['medium', 'auto']}
        columns={['1/4', '3/4']}
        fill
      >
        <Box gridArea='banner' border={{ color: 'kelp', side: 'right', size: 'large' }}>
          <Image gridArea='banner' fit='cover' src={Kelp} />
        </Box>

        <Box
          gridArea='intro'
          margin={{ horizontal: 'medium', top: 'auto' }}
          width={{ max: '40rem' }}
        >
          <ResponsiveImage height='1.25rem' src={Zooniverse} />
          <ResponsiveImage src={Title} />
        </Box>

        <Box
          direction='row'
          gridArea='body'
          margin={{ horizontal: 'medium', bottom: 'auto' }}
          justify='between'
        >
          <Box
            border={{ color: 'kelp', side: 'right' }}
            fill='horizontal'
            pad={{ right: 'small', vertical: 'medium' }}
          >
            <ChooseLocation />
          </Box>
          <Box
            gap='small'
            margin="medium"
            width='20%'
          >
            <StyledText size='1rem'>
              This project is a collaboration between Zooniverse-Adler Planetarium
              and the Floating Forests team.
            </StyledText>
            <Anchor href="#" label="Learn More" size='small' />
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}
