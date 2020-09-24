import React from 'react'
import { shallow } from 'enzyme'
import { Button } from 'grommet'
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
