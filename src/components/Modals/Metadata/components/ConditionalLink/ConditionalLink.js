import React from 'react'
import { Anchor, Text } from 'grommet'
import DOMPurify from 'dompurify'

export default function ConditionalLink({ color, text }) {
  const sanitizedText = DOMPurify.sanitize(text)
  const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  const regex = new RegExp(expression);
  const isLink = text.match(regex)
  return isLink ? <Anchor href={sanitizedText} color='kelp' size='small'>{sanitizedText}</Anchor>
    : <Text color={color}>{sanitizedText}</Text>
}
