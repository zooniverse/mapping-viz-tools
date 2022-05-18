import React from 'react'
import { shallow, mount } from 'enzyme'
import { Button, Text } from 'grommet'
import AssociatedSubjects, { StyledButton } from './AssociatedSubjects'
import mockData from '../../mockData'

let manySubjects = new Array(11).fill({ subjectMediaLocation: 'test.png' })
const setActiveSubjectSpy = jest.fn()
const setShowSubjectsModalSpy = jest.fn()

describe('Components > AssociatedSubjects', function () {
  let wrapper

  afterEach(() => jest.clearAllMocks());
  
  it('should render without props', function () {
    wrapper = shallow(<AssociatedSubjects />)
    expect(wrapper).toBeDefined()
  })

  describe('no subjects', function () {
    it('should suggest selecting another year if no subjects', function () {
      wrapper = mount(
        <AssociatedSubjects
          subjects={[]}
          subjectsErrorUI={false}
        />
      )
      const text = wrapper.find(Text)
      expect(text.find('span').text()).toEqual('Select another year.')
    })

    it('should display an error message if subjects database throws', function () {
      wrapper = mount(
        <AssociatedSubjects
          subjects={[]}
          subjectsErrorUI={true}
        />
      )
      const text = wrapper.find(Text)
      expect(text.find('span').text()).toEqual('Something went wrong in the subjects database.')
    })
  })

  describe('with props', function () {
    beforeEach(function () {
      wrapper = shallow(
        <AssociatedSubjects
          setActiveSubject={setActiveSubjectSpy}
          subjects={mockData}
        />
      )
    })

    it('should select an active subject', function () {
      const firstSubject = wrapper.find(StyledButton).first()
      firstSubject.simulate('click')
      expect(setActiveSubjectSpy).toHaveBeenCalled()
    })
  })
  
  describe('with more than 10 subjects', function () {
    beforeEach(function () {
      wrapper = shallow(
        <AssociatedSubjects
          setShowSubjectsModal={setShowSubjectsModalSpy}
          subjects={manySubjects}
        />
      )
    })

    it('should show ten subjects as buttons', function () {
      const subjects = wrapper.find(StyledButton)
      expect(subjects.length).toBe(10)
    })
    
    it('should show the see all button', function () {
      const seeAllBtn = wrapper.find(Button).first()
      seeAllBtn.simulate('click')
      expect(setShowSubjectsModalSpy).toHaveBeenCalled()
    })
  })
})
