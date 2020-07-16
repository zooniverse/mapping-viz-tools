import React from 'react';
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import ResponsiveImage, { StyledImage } from './ResponsiveImage';

describe('Component > ReponsiveImage', function () {
  it('should render without crashing', () => {
    const wrapper = shallow(<ResponsiveImage src='source.png' />);
    expect(wrapper).toBeDefined()
  });

  describe('with styling props', function () {
    it('should implement the styled rules', function () {
      const wrapper = shallow(
        <ResponsiveImage
          border
          maxHeight='6em'
          src='source.png'
        />);
      const Image = wrapper.find(StyledImage).first()
      const renderedImage = renderer.create(Image).toJSON()
      expect(renderedImage).toHaveStyleRule('border', '1px solid black')
    })
  })
})
