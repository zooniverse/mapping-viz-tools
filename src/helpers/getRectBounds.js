function getAspectSize(rectangle) {
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

function getUnknownValue(bounds, input, range, minVal, maxVal) {
    let percent = input / bounds
    let increment = percent * range
    return maxVal > minVal ? minVal + increment : minVal - increment
}

export default function getRectBounds(mapRef, rectangle) {
    const refDim = mapRef?.current?.container.getBoundingClientRect()
    const mapBounds = mapRef?.current?.leafletElement.getBounds()
    const aspectSize = getAspectSize(rectangle)

    let mapMinLat = mapBounds._northEast.lat
    let mapMaxLat = mapBounds._southWest.let
    let mapMinLng = mapBounds._southWest.lng
    let mapMaxLng = mapBounds._northEast.lng
    let latRange = Math.abs(mapBounds._northEast.lat - mapBounds._southWest.lat)
    let lngRange = Math.abs(mapBounds._northEast.lng - mapBounds._southWest.lng)

    let minLng = getUnknownValue(refDim.width, rectangle.x, lngRange, mapMinLng, mapMaxLng)
    let maxLng = getUnknownValue(refDim.width, rectangle.x + rectangle.width, lngRange, mapMinLng, mapMaxLng)
    let minLat = getUnknownValue(refDim.height, rectangle.y, latRange, mapMinLat, mapMaxLat)
    let maxLat = getUnknownValue(refDim.height, rectangle.y + rectangle.height, latRange, mapMinLat, mapMaxLat)

    return { minLng, maxLng, minLat, maxLat, ...aspectSize }
}