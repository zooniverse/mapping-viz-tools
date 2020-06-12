import React from 'react'
import { Box, Button, Image, Text } from 'grommet'
import Kelp from '../images/kelp.png'
import Title from '../images/title.svg'
import Zooniverse from '../images/zooniverse.png'

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
        pad='large'
      >
        <Box>
          <Box height='3rem' width='small'>
            <Image fit='contain' src={Zooniverse} />
          </Box>
          <Box margin={{ right: 'large' }}>
            <Image fit='contain' src={Title} />
          </Box>
        </Box>

        <Box direction='row'>
          <Box basis='2/3'>
            <Text>Choose a location to begin</Text>
            <Button href='#' label='Falkland Islands' plain />
            <Button href='#' label='Baja, California' plain />
            <Button href='#' label='Tasmania, Australia' plain />
          </Box>
          <Box basis='1/3'>
            <Text wrap>
              This project is a collaboration between Zooniverse-Adler Planetarium and the Floating Forests team.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
