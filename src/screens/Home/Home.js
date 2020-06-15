import React from 'react'
import { Anchor, Box, Image, Text } from 'grommet'
import Kelp from 'images/kelp.png'
import Title from 'images/title.svg'
import Zooniverse from 'images/zooniverse.png'
import ChooseLocation from './components/ChooseLocation'
import ResponsiveImage from 'components/ResponsiveImage'

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
        <Box basis='2/3' pad='small'>
          <Box height='3rem' width='small'>
            <Image fit='contain' src={Zooniverse} />
          </Box>
          <ResponsiveImage src={Title} />
        </Box>

        <Box basis='auto' direction='row' justify='between'>
          <Box
            border={{ color: 'kelp', side: 'right' }}
            fill='horizontal'
            pad={{ top: 'medium' }}
          >
            <ChooseLocation />
          </Box>
          <Box
            gap='small'
            margin="medium"
            width='small'
          >
            <Text>
              This project is a collaboration between Zooniverse-Adler Planetarium and the Floating Forests team.
            </Text>
            <Anchor href="#" label="Learn More" size='small' />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
