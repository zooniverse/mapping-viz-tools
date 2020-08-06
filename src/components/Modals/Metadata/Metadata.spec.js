import React from 'react'
import Metadata from './Metadata'
import { shallow } from 'enzyme'

describe('Component > Metadata', function () {
  it('should render without crashing', () => {
    const wrapper = shallow(<Metadata />);
    expect(wrapper).toBeDefined()
  });
})
