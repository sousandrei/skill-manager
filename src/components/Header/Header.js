import React from 'react'
import PropTypes from 'prop-types'

const Header = ({
	name,
	addSkill,
	experience,
	handleChange
}) => {
	let invalid = false

	if (!name.length)
		invalid = true

	if (!experience.length)
		invalid = true

	return (
		<section className='header'>
			<input
				name='name'
				type='text'
				placeholder='Node JS, Postgres, React, etc.,'
				value={name}
				onChange={handleChange} />

			<div className='header__second-line'>
				<select
					name='experience'
					value={experience}
					onChange={handleChange}>
					<option value='' disabled hidden>Experience</option>
					<option value='< 1 year'> {'<'} 1 year</option>
					<option value='1 - 3 years'>1 - 3 years</option>
					<option value='3 - 5 years'>3 - 5 years</option>
					<option value='5 - 7 years'>5 - 7 years</option>
					<option value='7+ years'>7+ years</option>
				</select>

				<button
					type='button'
					disabled={invalid}
					onClick={addSkill}>ADD SKILLS</button>
			</div>
		</section>
	)
}

Header.propTypes = {
	name: PropTypes.string,
	addSkill: PropTypes.func,
	experience: PropTypes.string,
	handleChange: PropTypes.func
}

export default Header

