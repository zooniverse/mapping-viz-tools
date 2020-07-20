import React from 'react'
import TitleLogo from './title'

export default function MappingVizLogo(props) {
  const { id } = props
  const viewBoxHeight = 383
  const viewBoxWidth = 760

  return (
    <svg
      aria-labelledby={id}
      role='img'
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
    >
      <title id={id}>
        Floating Forests: Mapping Visualizations
      </title>
      <TitleLogo />
    </svg>
  )
}
