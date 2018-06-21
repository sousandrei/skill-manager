import axios from 'axios'

const { SERVER } = process.env

export const addSkillAction = skill => ({
	type: 'ADD_SKILL',
	skill
})

export const addSkill = (skillData = {}) => {
	return async dispatch => {
		const {
			name,
			experience
		} = skillData

		const skill = {
			name,
			experience
		}

		try {
			let result = await axios.post(`${SERVER}/skills`, skill)
			return dispatch(addSkillAction(result.data))
		} catch (err) {
			/* istanbul ignore next */
			console.error('could not add skill')
		}
	}
}

export const delSkillAction = id => ({
	type: 'DEL_SKILL',
	id
})

export const delSkill = id => {
	return async dispatch => {
		if (!id)
			return

		try {
			await axios.delete(`${SERVER}/skills/${id}`)
			return dispatch(delSkillAction(id))
		} catch (err) {
			/* istanbul ignore next */
			console.error('could not delete skill')
		}
	}
}

export const getSkillsAction = skills => ({
	type: 'GET_SKILLS',
	skills
})

export const getSkills = () => {
	return async dispatch => {
		try {
			let result = await axios.get(`${SERVER}/skills`)
			return dispatch(getSkillsAction(result.data))
		} catch (err) {
			/* istanbul ignore next */
			console.error('could not get skills')
		}
	}
}