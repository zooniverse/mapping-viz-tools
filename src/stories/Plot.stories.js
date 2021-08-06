import Plot from '../components/MapDetail/components/Plot'
import { Grid, Grommet } from 'grommet'
import theme from 'theme'
import { mockChartData } from '../components/MapDetail/components/Charts/mockChartData'

const mockYears = [1985, 1990, 1995, 2000, 2005]

export default {
  title: 'Plot',
  component: Plot,
}

export const Default = () => (
  <Grommet theme={theme}>
    <Grid columns={['33%', 'flex']}>
      <Plot
        data={mockChartData}
        title='Kelp'
        yAxis='Avg Kelp km sq'
        years={mockYears}
        year={1990}
      />
    </Grid>
  </Grommet>
)

export const NoData = () => (
  <Grommet theme={theme}>
    <Grid columns={['33%', 'flex']}>
      <Plot
        title='Kelp'
        yAxis='Avg Kelp km sq'
        years={mockYears}
        year={1990}
      />
    </Grid>
  </Grommet>
)