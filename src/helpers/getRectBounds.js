export function getAspectSize(rectangle) {
    let height, width

    if (rectangle.height > rectangle.width) {
        height = '100%'
        width = `${rectangle.width / rectangle.height * 100}%`
    } else {
        height = `${rectangle.height / rectangle.width * 100}%`
        width = '100%'
    }

    return { height, width }
}

export default function getRectBounds(mapRef, rectangle) {
    const aspectSize = getAspectSize(rectangle)

    let northEast = mapRef?.containerPointToLatLng({ x: rectangle.x + rectangle.width, y: rectangle.y})
    let southWest = mapRef?.containerPointToLatLng({ x: rectangle.x, y: rectangle.y + rectangle.height })

    return { northEast, southWest, ...aspectSize }
}