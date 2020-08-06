import React from 'react'
import { Anchor, Text } from 'grommet'

export default function ConditionalLink({ color, text }) {
  const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  const regex = new RegExp(expression);
  const isLink = text.match(regex)
  return isLink ? <Anchor href={text} color='kelp' size='small'>{text}</Anchor>
    : <Text color={color}>{text}</Text>
}
