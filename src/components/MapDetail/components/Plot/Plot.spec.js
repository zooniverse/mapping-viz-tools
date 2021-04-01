import React from 'react'
import Plot, { Uppercase } from './Plot'
import { mount, shallow } from 'enzyme'
import mockChartData from '../Charts/mockChartData'
import { ResponsiveLine } from '@nivo/line'

describe('Component > Plot', () => {
  let wrapper

  it('should render without crashing', () => {
    wrapper = shallow(<Plot />)
    expect(wrapper).toBeDefined()
  })

  describe('Plot with props', () => {
    beforeAll(() => {
      wrapper = mount(
        <Plot
          data={mockChartData}
          title='Temperature'
          year={1895}
          yAxis='Avg Temp (F)'
        />
      )
    })

    it('should render title prop', () => {
      const title = wrapper.find(Uppercase)
      const inner = title.find('span')
      expect(inner.text()).toEqual('Temperature')
    })

    it('should render y-axis label prop', () => {
      const plotContainer = wrapper.find(ResponsiveLine)
      expect(plotContainer.props().axisLeft.legend).toEqual('Avg Temp (F)')
    })

    it('render data using nivo/line package', () => {
      const plotContainer = wrapper.find(ResponsiveLine)
      expect(plotContainer.props().data[0].data).toEqual(mockChartData)
    })
  })
})
