import React from 'react'
import { Box, Button, Image, Text } from 'grommet'
import { FormNext } from 'grommet-icons'
import { arrayOf, shape, string } from 'prop-types'
import styled from 'styled-components'

const Uppercase = styled(Text)`
  text-transform: uppercase;
`

export default function AssociatedSubjects({ subjects }) {
  const firstTenSubjects = subjects.slice(0,10)

  return (
    <Box
      border={{ color: 'kelp', side: 'top' }}
      gap='xsmall'
      pad={{ top: 'small' }}
      width='medium'
    >
      <Box align='center' direction='row' justify='between'>
        <Text color='kelp'>Associated Zooniverse Subjects ({subjects.length})</Text>
        <Button
          gap='0.2em'
          icon={<FormNext size='small' />}
          label={<Uppercase color='kelp' size='small'>See More</Uppercase>}
          plain
          reverse
        />
      </Box>
      <Box
        direction='row'
        height={{ max: '7.5rem' }}
        wrap
      >
        {firstTenSubjects.map((subject, i) => {
          return (
            <Box
              flex={false}
              height='40%'
              margin={{ right: '0.25rem' }}
              width='15%'
            >
              <Image
                key={`ASSOCIATED_SUBJECT_${i}`}
                fit='contain'
                src={`//${subject.subjectMediaLocation}`}
              />
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

AssociatedSubjects.propTypes = {
  subjects: arrayOf(shape({
    subjectMediaLocation: string
  }))
}
