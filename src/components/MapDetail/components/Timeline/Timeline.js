import React from 'react'
import { Box, Text, Button } from 'grommet'
import styled from 'styled-components'

const Relative = styled(Box)`
  position: relative;
`

const YearButton = styled(Button)`
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
  }
`

// a range html value is arbitrary so could listen for certain value ranges and snap the element to desired position

export default function Timeline({ year, setYear }) {
  const numOptions = 5

  const handleYear = index => {
    if (year !== index && index >= 0 && index < numOptions) setYear(index)
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
          <YearButton onClick={() => handleYear(0)}>
            <Circle
              background='kelp'
              height='8px'
              width='8px'
              margin={{ vertical: '2px' }}
            />
            <Year color='kelp' size='12px'>
              1980
            </Year>
          </YearButton>
          <YearButton onClick={() => handleYear(1)}>
            <Circle
              background='kelp'
              height='8px'
              width='8px'
              margin={{ vertical: '2px' }}
            />
            <Year color='kelp' size='12px'>
              1990
            </Year>
          </YearButton>
          <YearButton onClick={() => handleYear(2)}>
            <Circle
              background='kelp'
              height='8px'
              width='8px'
              margin={{ vertical: '2px' }}
            />
            <Year color='kelp' size='12px'>
              2000
            </Year>
          </YearButton>
          <YearButton onClick={() => handleYear(3)}>
            <Circle
              background='kelp'
              height='8px'
              width='8px'
              margin={{ vertical: '2px' }}
            />
            <Year color='kelp' size='12px'>
              2010
            </Year>
          </YearButton>
          <YearButton onClick={() => handleYear(4)}>
            <Circle
              background='kelp'
              height='8px'
              width='8px'
              margin={{ vertical: '2px' }}
            />
            <Year color='kelp' size='12px'>
              2020
            </Year>
          </YearButton>
          <Slider
            type='range'
            min={0}
            max={100}
            // value={100}
          />
        </Relative>
      </Box>
    </Box>
  )
}
