import React from 'react'
import Subjects from './Subjects'
import { shallow } from 'enzyme'

describe('Component > Subjects', function () {
  it('should render without crashing', () => {
    const wrapper = shallow(<Subjects />);
    expect(wrapper).toBeDefined()
  });
})
