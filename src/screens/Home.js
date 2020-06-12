import React from 'react'
import { Box, Image } from 'grommet'
import Title from '../images/title.svg'

export default function Home() {
  return (
    <Box background='sand' direction='row' fill>
      <Box background='red' basis='1/4' fill='vertical'/>
      <Box
        basis='3/4'
        border={{
          color: 'kelp',
          side: 'left',
          size: 'large'
        }}
      >
        <Image src={Title} />
      </Box>
    </Box>
  )
}
