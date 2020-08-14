import React from 'react'
import { shallow } from 'enzyme'
import { Button, Image } from 'grommet'
import Subjects from './Subjects'

describe('Component > Subjects', () => {
  let wrapper

  it('should render without crashing', () => {
    wrapper = shallow(<Subjects />);
    expect(wrapper).toBeDefined()
  });

  describe('navigation controls', () => {
    it('should go to the last page', () => {
      let lastBtn = wrapper.find(Button).last()
      lastBtn.simulate('click')
      let images = wrapper.find(Image)
      expect(images.length).toBe(1)
      lastBtn = wrapper.find(Button).last()
      expect(lastBtn.props().disabled).toBeTruthy()
    })

    it('should go to the first page', () => {
      let firstBtn = wrapper.find(Button).first()
      firstBtn.simulate('click')
      let images = wrapper.find(Image)
      expect(images.length).toBe(9)
      firstBtn = wrapper.find(Button).first()
      expect(firstBtn.props().disabled).toBeTruthy()
    })

    it('should go to the nth page', () => {
      let nthBtn = wrapper.find(Button).at(2)
      nthBtn.simulate('click')
      let images = wrapper.find(Image)
      expect(images.length).toBe(9)

      const firstBtn = wrapper.find(Button).first()
      const lastBtn = wrapper.find(Button).last()
      expect(firstBtn.props().disabled).toBeFalsy()
      expect(lastBtn.props().disabled).toBeFalsy()
    })
  })
})
