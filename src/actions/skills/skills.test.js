import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

import SkillMock from '../../mocks/Skill.mock'
import {
	getSkills,
	getSkillsAction,
	addSkill,
	addSkillAction,
	delSkill,
	delSkillAction
} from './skills'

const createMockStore = configureMockStore([thunk])


test('should add skill to store', async () => {
	const store = createMockStore()

	let { skill } = await store.dispatch(addSkill(SkillMock))

	expect(store.getActions()).toEqual([addSkillAction(skill)])
})

test('should del skill from store', async () => {
	const store = createMockStore()

	let { skill } = await store.dispatch(addSkill(SkillMock))
	await store.dispatch(delSkill(skill.id))

	expect(store.getActions())
		.toEqual([addSkillAction(skill), delSkillAction(skill.id)])
})

test('should not del skill from store', async () => {
	const store = createMockStore()

	let { skill } = await store.dispatch(addSkill(SkillMock))
	await store.dispatch(delSkill())

	expect(store.getActions())
		.toEqual([addSkillAction(skill)])
})

test('should get skills to store', async () => {
	const store = createMockStore()

	let { skills } = await store.dispatch(getSkills())

	expect(store.getActions())
		.toEqual([getSkillsAction(skills)])
})