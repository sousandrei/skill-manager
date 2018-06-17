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
