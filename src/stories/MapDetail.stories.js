import { Grommet } from 'grommet'
import theme from 'theme'
import 'leaflet/dist/leaflet.css'
import MapDetail from '../components/MapDetail'
import mockData from '../components/MapDetail/mockData'

export default {
  title: 'MapDetail',
  component: MapDetail,
}

export const Default = () => (
  <Grommet theme={theme}>
    <MapDetail subjects={mockData} />
  </Grommet>
)
