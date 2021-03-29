import React from 'react'
import { shallow, mount } from 'enzyme'
import Timeline from './Timeline'
import { Slider } from './Timeline'
import { act } from '@testing-library/react'

describe('Components > Timeline', () => {
  let wrapper

  it('should render without crashing', () => {
    wrapper = shallow(<Timeline />)
    expect(wrapper).toBeDefined()
  })

  it('should snap to the tick marks', () => {
    wrapper = mount(<Timeline />)
    let input = wrapper.find(Slider)
    const event = { target: { name: 'timeline-slider', value: 99 } }
    act(() => input.props().onChange(event))
    wrapper.update()
    input = wrapper.find(Slider)
    expect(input.props().value).toEqual(99)
    act(() => input.props().onMouseUp(event))
    wrapper.update()
    input = wrapper.find(Slider)
    expect(input.props().value).toEqual(100)
  })
})
