import { createContext, useAsyncSetState } from 'react'

export const MiniMapContext = createContext({
  map: null,
  setMap: () => {}
})

export const MiniMapProvider = ({ children }) => {
  const [map, setMap] = useAsyncSetState(null)
  return (
    <MiniMapContext.Provider
      value={{ map, setMap }}
    >
      {children}
    </MiniMapContext.Provider>
  )
}

// export const MapInitController = props => {
//   const { setMap } = useContext(MapContext)

//   // On Mount
//   useEffect(() => {
//     setMap(map)
//   }, [])
//   return <></>
// }
