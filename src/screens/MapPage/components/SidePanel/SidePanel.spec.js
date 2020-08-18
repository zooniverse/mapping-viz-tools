import React from 'react'
import { shallow } from 'enzyme'
import SidePanel, { StyledButton } from './SidePanel'

describe('Component > SidePanel', function () {
  let wrapper
  let changeDrawingSpy = jest.fn()

  beforeEach(function () {
    wrapper = shallow(<SidePanel changeDrawing={changeDrawingSpy} />)
  })

  afterEach(() => jest.clearAllMocks());

  it('should render without crashing', function () {
    expect(wrapper).toBeDefined()
  })

  describe('use rectangle tool', function () {
    describe('onClick', function () {
      it('should change the isDrawing state', function () {
        let btn = wrapper.find(StyledButton).first()
        btn.simulate('click')
        expect(changeDrawingSpy).toHaveBeenCalledWith(true)
      })
    })
  })
})
