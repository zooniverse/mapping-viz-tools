import React from 'react'
import ConditionalLink from './ConditionalLink'
import { shallow } from 'enzyme'

describe('Component > ConditionalLink', function () {
  describe('without a text link', function () {
    it('should render Text', function () {
      const wrapper = shallow(<ConditionalLink text='Some text' />)
      expect(wrapper.props().href).toBeUndefined()
    })
  })

  describe('with an http text link', function () {
    it('should render an Anchor', function () {
      const wrapper = shallow(<ConditionalLink text='http://www.testlink.com' />)
      expect(wrapper.props().href).toBeDefined()
    })
  })

  describe('with a www text link', function () {
    it('should render an Anchor', function () {
      const wrapper = shallow(<ConditionalLink text='www.testlink.com' />)
      expect(wrapper.props().href).toBeDefined()
    })
  })
})
