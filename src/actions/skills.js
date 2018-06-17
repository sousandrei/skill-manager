export const addSkillAction = skill => ({
	type: 'ADD_SKILL',
	skill
})

export const addSkill = (skillData = {}) => {
	return (dispatch, getState) => {
		const {
			description = '',
			note = '',
			amount = 0,
			createdAt = 0
		} = skillData

		const skill = {
			description,
			note,
			amount,
			createdAt
		}

		//todo request
		return skill
	}
}

export const delSkillAction = ({
	id
} = {}) => ({
	type: 'REMOVE_SKILL',
	id
})

export const delSkill = ({ id } = {}) => {
	return (dispatch, getState) => {
		//todo request
		return id
	}
}