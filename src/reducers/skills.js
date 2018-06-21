/* 
 skills reducer
 treats all actions related to skills
 */

const skillsReducerDefaultState = []

export default (
	state = skillsReducerDefaultState,
	action
) => {
	switch (action.type) {
		case 'GET_SKILLS':
			return action.skills
		case 'ADD_SKILL':
			return [...state, action.skill]
		case 'DEL_SKILL':
			return state.filter(skill => skill.id != action.id)
		default:
			return state
	}
}