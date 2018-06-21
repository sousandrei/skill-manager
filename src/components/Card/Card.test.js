import React from 'react'
import thunk from 'redux-thunk'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'

import Card, { Card as CardShallow } from './Card'
import SkillMock from '../../mocks/Skill.mock'

import {
	addSkill,
	addSkillAction,
	delSkillAction
} from '../../actions/skills/skills'

const createMockStore = configureMockStore([thunk])


test('should render card', () => {

	const wrapper = shallow(<CardShallow
		index={1}
		skill={SkillMock} />)

	expect(wrapper).toMatchSnapshot()
})

test('should call delSkill on button click', () => {
	const delSkill = jest.fn()

	const wrapper = shallow(<CardShallow
		index={1}
		delSkill={delSkill}
		skill={SkillMock} />)

	wrapper.find('.card__button')
		.simulate('click')

	expect(delSkill).toHaveBeenCalled()
})

test('should dispatch delSkill on button click', async done => {
	const store = createMockStore()

	let { skill } = await store.dispatch(addSkill(SkillMock))

	const wrapper = shallow(<Card
		index={1}
		store={store}
		skill={skill} />)

	wrapper.dive().find('.card__button')
		.simulate('click')

	setTimeout(() => {
		expect(store.getActions())
			.toEqual([
				addSkillAction(skill),
				delSkillAction(skill.id)
			])
		done()
	}, 100)

})

