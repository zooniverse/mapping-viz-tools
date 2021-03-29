import React from 'react'
import { Box, Text } from 'grommet'
import styled from 'styled-components'

const Relative = styled(Box)`
  position: relative;
`

const Circle = styled(Box)`
  border-radius: 50%;
`

const Year = styled(Text)`
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
`

const Slider = styled.input`
  appearance: none;
  position: absolute;
  left: 2px;
  top: 0;
  margin: 0;
  width: calc(100% - 4px);
  height: 100%;
  background: transparent;
  transition: all 100ms linear;

  &::-webkit-slider-thumb {
    appearance: none;
    background: black;
    height: 20px;
    width: 4px;
    cursor: pointer;
    transition: all 200ms linear;
  }
`

export default function Timeline({ year, setYear }) {
  const inputSlider = React.useRef(null)
  
  const handleYear = e => {
    e.preventDefault()
    
    const numOptions = 5 // number of circle 'tick marks'
    const rangeValue = e.target.value
    const max = e.target.max

    // snap the marker to the nearest tick mark
    const step = max / (numOptions - 1)
  }

  return (
    <Box direction='column'>
      <Text color='kelp' margin={{ bottom: 'xsmall' }}>
        Time
      </Text>
      <Box>
        <Relative
          background='timeline'
          direction='row'
          justify='between'
          margin={{ bottom: 'small' }}
        >
          <Relative>
            <Circle
              background='kelp'
              height='8px'
              width='8px'
              margin={{ vertical: '2px' }}
            />
            <Year color='kelp' size='12px'>
              1980
            </Year>
          </Relative>
          <Relative>
            <Circle
              background='kelp'
              height='8px'
              width='8px'
              margin={{ vertical: '2px' }}
            />
            <Year color='kelp' size='12px'>
              1990
            </Year>
          </Relative>
          <Relative>
            <Circle
              background='kelp'
              height='8px'
              width='8px'
              margin={{ vertical: '2px' }}
            />
            <Year color='kelp' size='12px'>
              2000
            </Year>
          </Relative>
          <Relative>
            <Circle
              background='kelp'
              height='8px'
              width='8px'
              margin={{ vertical: '2px' }}
            />
            <Year color='kelp' size='12px'>
              2010
            </Year>
          </Relative>
          <Relative>
            <Circle
              background='kelp'
              height='8px'
              width='8px'
              margin={{ vertical: '2px' }}
            />
            <Year color='kelp' size='12px'>
              2020
            </Year>
          </Relative>
          <Slider
            type='range'
            min={0}
            max={100}
            step={1}
            onChange={e => handleYear(e)}
            ref={inputSlider}
          />
        </Relative>
      </Box>
    </Box>
  )
}
