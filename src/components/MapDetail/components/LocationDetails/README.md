# LocationDetails

MapDetail's design includes the following details:
- Map area
- Map's center coordinates

In `react-leaflet` version 3, the map instance is only accessible from child components of MapContainer. LocationDetails must be a child of MapContainer to use methods such as `map.getCenter()`. Therefore, this component is styled to display on top of the mini-map.

Ideally, LocationDetails is positioned above the mini-map to the left of the subjects checkbox, but that's only possible by using the `ref` property on MapContainer. `react-leaflet` version 4 re-introduces the `ref` property, but this application must first be upgraded to React 18 and enzyme tests removed.