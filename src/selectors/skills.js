/* 
 example for a skill selector
 not used at the moment
 */

export default (
	skills,
	{ text }
) => {
	return skills.filter(skill => {
		const textMatch = skill.description
			.toLowerCase()
			.includes(text.toLowerCase())

		return textMatch
	})
}
