import { Grommet } from 'grommet'
import theme from 'theme'
import Subjects from '../components/Modals/Subjects'
import mockData from '../components/MapDetail/mockData'

export default {
  title: 'Associated Subjects',
  component: Subjects,
}

export const Default = () => (
  <Grommet theme={theme}>
    <Subjects subjects={mockData} />
  </Grommet>
)
