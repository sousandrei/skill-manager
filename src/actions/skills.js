export const addSkillAction = skill => ({
	type: 'ADD_SKILL',
	skill
})

export const addSkill = (skillData = {}) => {
	return dispatch => {
		const {
			name,
			experience
		} = skillData

		const skill = {
			id: Math.floor(Math.random() * 1000),
			name,
			experience
		}

		//todo request
		return dispatch(addSkillAction(skill))
	}
}

export const delSkillAction = id => ({
	type: 'DEL_SKILL',
	id
})

export const delSkill = id => {
	return dispatch => {
		if (!id)
			return

		//todo request
		return dispatch(delSkillAction(id))
	}
}

export const getSkillsAction = skills => ({
	type: 'GET_SKILLS',
	skills
})

export const getSkills = () => {
	return dispatch => {
		let skills = [{ id: 101, name: 'a', experience: 'ca' }]

		//todo request
		return dispatch(getSkillsAction(skills))
	}
}