import React from 'react'
import { shallow } from 'enzyme'

import { Card } from './Card'
import SkillMock from '../../mocks/Skill.mock'

test('should render card', () => {

	const wrapper = shallow(<Card
		index={1}
		skill={SkillMock} />)

	expect(wrapper).toMatchSnapshot()
})

