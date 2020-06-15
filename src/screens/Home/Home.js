import React from 'react'
import { Anchor, Box, Button, Image, Text } from 'grommet'
import styled from 'styled-components'
import Kelp from 'images/kelp.png'
import Title from 'images/title.svg'
import Zooniverse from 'images/zooniverse.png'

const StyledBox = styled(Box)`
  display: inline;
`

const StyledImage = styled(Image)`
  height: auto;
  max-height: 100%;
  max-width: 100%;
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
        pad={{ horizontal: 'large', top: 'large' }}
      >
        <Box basis='2/3'>
          <Box height='3rem' width='small'>
            <Image fit='contain' src={Zooniverse} />
          </Box>
          <StyledBox margin={{ right: 'auto' }}>
            <StyledImage fit='contain' src={Title} />
          </StyledBox>
        </Box>

        <Box basis='1/3' direction='row' justify='between'>
          <Box border={{ color: 'kelp', side: 'right' }} fill='horizontal' margin={{ top: 'medium' }}>
            <Text>Choose a location to begin</Text>
            <Button onClick={() => console.log("Going Places")} label='Falkland Islands' plain />
            <Button onClick={() => console.log("Going Places")} label='Baja, California' plain />
            <Button onClick={() => console.log("Going Places")} label='Tasmania, Australia' plain />
          </Box>
          <Box
            gap='small'
            margin="medium"
            width='small'
          >
            <Text wrap>
              This project is a collaboration between Zooniverse-Adler Planetarium and the Floating Forests team.
            </Text>
            <Anchor href="#" label="Learn More" size='small' />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
