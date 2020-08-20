import React from 'react'
import { bool, func, object, shape } from 'prop-types'
import styled, { css } from 'styled-components'
import getRectBounds from 'helpers/getRectBounds'

export const SVG = styled.svg`
	${props => props.canDraw ? css`cursor: crosshair;` : css`cursor: default;`}
  touch-action: none;
`

export default function DrawingOverlay({
    canDraw = false,
    changeDrawing = () => {},
    mapRef,
    setCoords = () => {}
}) {
    const [initCoords, setInitCoords] = React.useState({})
    const [rectangle, setRectangle] = React.useState(null)
    const [isDrawing, setIsDrawing] = React.useState(false)
    const svgRef = React.useRef(null)

  const getXY = (e) => {
    const ref = svgRef?.current
    const boundingBox = ref?.getBoundingClientRect();
		if (!boundingBox) return
		let clientX = e?.clientX || 0
		let clientY = e?.clientY || 0

		const x = (clientX - boundingBox.left)
		const y = (clientY - boundingBox.top)
		return { x, y }
	}

	const onPointerDown = (e) => {
		setIsDrawing(true)
		setInitCoords(getXY(e))
	}   

	const onPointerMove = (e) => {
		if (!canDraw || !isDrawing) return
		let newCoords = getXY(e)
		let width = Math.abs(newCoords.x - initCoords.x) || 0
		let height = Math.abs(newCoords.y - initCoords.y) || 0
		let newRect = {
			width,
			height,
			x: Math.min(initCoords.x, newCoords.x),
			y: Math.min(initCoords.y, newCoords.y)
		}
		setRectangle(newRect) 
	}    

	const onPointerUp = (e) => {
		if (!canDraw || !isDrawing) return

		setIsDrawing(false)
		changeDrawing(false)

		if (mapRef && mapRef.current) {
			setCoords(getRectBounds(mapRef, rectangle))
		}
		setRectangle(null)
	}    

	return (
		<SVG
			canDraw={canDraw}
			onPointerDown={onPointerDown}
			onPointerMove={onPointerMove}
			onPointerUp={onPointerUp}
			ref={svgRef}
			style={{ width: '100%', height: '100%', position: 'absolute', zIndex: '1000' }}
		>
			{rectangle && (
				<rect
					x={rectangle.x}
					y={rectangle.y}
					width={rectangle.width}
					height={rectangle.height}
					fill='transparent'
					stroke='#AFFF00'
					strokeWidth='2'
				/>
			)}
		</SVG>
	)
}

DrawingOverlay.propTypes = {
	canDraw: bool,
	changeDrawing: func,
	mapRef: shape({
		current: object
	})
}