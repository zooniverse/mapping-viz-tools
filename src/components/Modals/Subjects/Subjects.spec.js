import React from 'react'
import { shallow } from 'enzyme'
import { Button, Image } from 'grommet'
import { PlainButton } from '@zooniverse/react-components'
import Subjects from './Subjects'

const onCloseSpy = jest.fn()
const onSelectSubjectSpy = jest.fn()

const mockSubjects = new Array(19)
mockSubjects.fill({ alt: 'Falkland Islands Map', link: '#', src: '' })

describe('Component > Subjects', () => {
  let wrapper

  it('should render without props', () => {
    wrapper = shallow(<Subjects />);
    expect(wrapper).toBeDefined()
  })

  it('should render without crashing', () => {
    wrapper = shallow(
      <Subjects
        onClose={onCloseSpy}
        onSelectSubject={onSelectSubjectSpy}
        subjects={mockSubjects}
      />
    );
    expect(wrapper).toBeDefined()
  });

  afterEach(() => jest.clearAllMocks());

  describe('navigation controls', () => {
    it('should go to the next page', () => {
      let lastBtn = wrapper.find(Button).last()
      lastBtn.simulate('click')
      let images = wrapper.find(Image)
      expect(images.length).toBe(9)
      lastBtn = wrapper.find(Button).last()
      expect(lastBtn.props().disabled).toBeFalsy()
    })

    it('should go to the first page', () => {
      let leftArrow = wrapper.find(Button).at(9)
      leftArrow.simulate('click')
      let images = wrapper.find(Image)
      expect(images.length).toBe(9)
      leftArrow = wrapper.find(Button).at(9)
      expect(leftArrow.props().disabled).toBeTruthy()
    })

    it('should go to the nth page', () => {
      let nthBtn = wrapper.find(Button).at(11)
      nthBtn.simulate('click')
      let images = wrapper.find(Image)
      expect(images.length).toBe(9)

      const leftButton = wrapper.find(Button).at(9)
      const rightButton = wrapper.find(Button).last()
      expect(leftButton.props().disabled).toBeFalsy()
      expect(rightButton.props().disabled).toBeFalsy()
    })
  })

  describe('onClose button', function () {
    it('should close the modal', function () {
      const closeBtn = wrapper.find(PlainButton).first()
      closeBtn.simulate('click')
      expect(onCloseSpy).toHaveBeenCalled()
    })
  })

  describe('subject buttons', function () {
    it('should select the subject', function () {
      const subjectBtn = wrapper.find(Button).first()
      subjectBtn.simulate('click')
      expect(onSelectSubjectSpy).toHaveBeenCalled()
    })
  })
})
