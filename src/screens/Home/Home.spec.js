import React from 'react';
import { shallow } from 'enzyme'
import Home from './Home';

describe('Component > Home', function () {
  it('should render without crashing', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toBeDefined()
  });
})
