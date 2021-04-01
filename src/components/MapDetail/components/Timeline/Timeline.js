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
    background: #113e3b;
    height: 20px;
    width: 4px;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    border: none;
    background: #113e3b;
    height: 20px;
    width: 4px;
    cursor: pointer;
  }
`

const Timeline = ({ years = [], setYear }) => {
  const inputSlider = React.useRef(null)

  const onChange = e => {
    if (e.target.value) setYear(e.target.value)
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
          {years.length &&
            years.map(year => (
              <Relative key={year}>
                <Circle
                  background='kelp'
                  height='8px'
                  width='8px'
                  margin={{ vertical: '2px' }}
                />
                {year % 5 === 0 ? (
                  <Year color='kelp' size='12px'>
                    {year}
                  </Year>
                ) : null}
              </Relative>
            ))}
          {years.length && (
            <Slider
              type='range'
              min={years[0]}
              max={years[years.length - 1]}
              step={1}
              ref={inputSlider}
              onChange={e => onChange(e)}
              name='timeline-slider'
            />
          )}
        </Relative>
      </Box>
    </Box>
  )
}

export default Timeline
