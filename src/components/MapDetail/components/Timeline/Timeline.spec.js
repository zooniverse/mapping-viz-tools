import React from 'react'
import { mount, shallow } from 'enzyme'
import Timeline, { Slider } from './Timeline'
import { act } from 'react-dom/test-utils'

const mockYears = [1985, 1990, 1995, 2000, 2005]

describe('Components > Timeline', () => {
  let wrapper
  const setYearSpy = jest.fn()

  it('should render without crashing', () => {
    wrapper = shallow(<Timeline />)
    expect(wrapper).toBeDefined()
  })

  it('should call setYear with user input', () => {
    wrapper = mount(
      <Timeline setYear={setYearSpy} years={mockYears} year={1985} />
    )
    const input = wrapper.find(Slider)
    const max = input.props().max
    const event = { target: { name: 'timeline-slider', value: max } }
    act(() => input.props().onChange(event))
    wrapper.update()
    expect(setYearSpy).toHaveBeenCalled()
  })
})
