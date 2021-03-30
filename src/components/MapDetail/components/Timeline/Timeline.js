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

export const Slider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  position: absolute;
  left: 2px;
  top: 0;
  margin: 0;
  width: calc(100% - 4px);
  height: 100%;
  background: transparent;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background: #113E3B;
    height: 20px;
    width: 4px;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    border: none;
    background: #113E3B;
    height: 20px;
    width: 4px;
    cursor: pointer;
  }
`

const Timeline = () => {
  const numTicks = 5
  const inputSlider = React.useRef(null)
  const [sliderValue, setValue] = React.useState(0)
  
  const handleYear = e => {
    const rangeValue = e.target.value
    const max = inputSlider.current.max
    const step = max / (numTicks - 1)
    const snapIndex = Math.round(rangeValue / step)
    setValue(snapIndex * step)
    // will fetch new range of subjects here too
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
            ref={inputSlider}
            onMouseUp={e => handleYear(e)}
            onChange={e => setValue(e.target.value)}
            value={sliderValue}
            name="timeline-slider"
          />
        </Relative>
      </Box>
    </Box>
  )
}

export default Timeline
