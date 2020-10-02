import React from 'react'
import Metadata from './Metadata'
import { mount } from 'enzyme'
import { PlainButton } from '@zooniverse/react-components'
import mockData from '../../MapDetail/mockData'

describe('Component > Metadata', function () {
  let wrapper
  const onCloseSpy = jest.fn()
  
  it('should render without props', () => {
    wrapper = mount(<Metadata />);
    expect(wrapper).toBeDefined()
  })

  describe('with metadata', function () {
    beforeEach(function () {
      wrapper = mount(
        <Metadata
          onClose={onCloseSpy}
          subject={mockData[0]}
        />
      )
    })

    it('should render without crashing', function () {
      expect(wrapper).toBeDefined()
    })

    it('should close the modal', function () {
      const closeBtn = wrapper.find(PlainButton).first()
      closeBtn.simulate('click')
      expect(onCloseSpy).toHaveBeenCalled()
    })
  })
})
