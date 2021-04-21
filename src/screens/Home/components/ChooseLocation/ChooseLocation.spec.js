import React from 'react';
import { shallow } from 'enzyme'
import { ChooseLocation } from './ChooseLocation';

describe('Component > ChooseLocation', function () {
  let wrapper

  beforeEach(function () {
    wrapper = shallow(<ChooseLocation />);
  })

  it('should render without crashing', () => {
    expect(wrapper).toBeDefined()
  });
})
