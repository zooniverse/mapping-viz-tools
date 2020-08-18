import React from 'react'

export default function DrawingOverlay({ canDraw = false }) {
    const [initCoords, setInitCoords] = React.useState({})
    const [rectangle, setRectangle] = React.useState({})
    const [isDrawing, setIsDrawing] = React.useState(false)
    const svgRef = React.useRef(null)

    const getXY = (e) => {
        const ref = svgRef?.current
        if (!ref) return
        const boundingBox = ref.getBoundingClientRect();
        if (!boundingBox) return
        let clientX = e?.clientX || 0
        let clientY = e?.clientY || 0

        const x = (clientX - boundingBox.left)
        const y = (clientY - boundingBox.top)
        return { x, y }
    }

    const onMouseDown = (e) => {
        setIsDrawing(true)
        let coords = getXY(e)
        setInitCoords(coords)
    }   
    const onMouseMove = (e) => {
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
    const onMouseUp = (e) => {
        setIsDrawing(false)
        setRectangle({})
    }    

    return (
        <svg
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            ref={svgRef}
            style={{ width: '100%', height: '100%', position: 'absolute', zIndex: '1000' }}
        >
            <rect
                x={rectangle.x}
                y={rectangle.y}
                width={rectangle.width}
                height={rectangle.height}
                fill='transparent'
                stroke='#AFFF00'
                strokeWidth='2'
            />
        </svg>
    )
}