import React from 'react'
import Plot, { Uppercase } from './Plot'
import { mount, shallow } from 'enzyme'
import { mockChartData } from '../Charts/mockChartData'
import { ResponsiveScatterPlot } from '@nivo/scatterplot'

const mockYears = [1985, 1990, 1995, 2000, 2005]

describe('Component > Plot', () => {
  let wrapper

  it('should render without crashing', () => {
    wrapper = shallow(<Plot />)
    expect(wrapper).toBeDefined()
  })

  describe('Plot without data', () => {
    it('should not render a scatterplot if no subject data', () => {
      wrapper = mount(
        <Plot
          data={null}
          title='Kelp'
          year={1895}
          yAxis='Avg Kelp km sq'
          years={mockYears}
        />
      )
      const noData = wrapper.find('#plot-no-data')
      expect(noData).toBeDefined()
      wrapper.unmount()
    })
  })

  describe('Plot with props', () => {
    beforeAll(() => {
      wrapper = mount(
        <Plot
          data={mockChartData}
          title='Temperature'
          year={1895}
          yAxis='Avg Temp (F)'
          years={mockYears}
        />
      )
    })

    it('should render title prop', () => {
      const title = wrapper.find(Uppercase)
      const inner = title.find('span')
      expect(inner.text()).toEqual('Temperature')
    })

    it('should render y-axis label prop', () => {
      const plotContainer = wrapper.find(ResponsiveScatterPlot)
      expect(plotContainer.props().axisLeft.legend).toEqual('Avg Temp (F)')
    })

    it('render data using nivo/scatterplot package', () => {
      const plotContainer = wrapper.find(ResponsiveScatterPlot)
      expect(plotContainer.props().data[0].data).toEqual(mockChartData)
    })
  })
})
