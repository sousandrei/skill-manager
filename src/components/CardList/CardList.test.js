import React from 'react'
import { shallow } from 'enzyme'

import CardList from './CardList'
import SkillMock from '../../mocks/Skill.mock'

test('should render cardlist', () => {
	const skills = [SkillMock, SkillMock, SkillMock]

	const wrapper = shallow(<CardList skills={skills} />)

	expect(wrapper).toMatchSnapshot()
})

