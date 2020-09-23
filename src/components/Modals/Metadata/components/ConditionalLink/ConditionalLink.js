import React from 'react'
import { Anchor, Text } from 'grommet'
import DOMPurify from 'dompurify'
import styled from 'styled-components'

const StyledAnchor = styled(Anchor)`
  word-break: break-all;
`

export default function ConditionalLink({ color, text }) {
  const sanitizedText = DOMPurify.sanitize(text)
  const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  const regex = new RegExp(expression);
  const isLink = text.match(regex)
  return isLink ?
    <StyledAnchor
      href={sanitizedText}
      color='kelp'
      size='small'
      target='_blank'
    >
      {sanitizedText}
    </StyledAnchor>
    : <Text color={color}>{sanitizedText}</Text>
}
