/* 
 header with all the input needed
 conected to the store to add skills
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addSkill } from '../../actions/skills/skills'

export class Header extends React.Component {
	state = {
		name: '',
		experience: ''
	}

	handleChange = e =>
		this.setState({ [e.target.name]: e.target.value })

	addSkill = async () => {
		const {
			name,
			experience
		} = this.state

		await this.props.addSkill({ name, experience })
		this.setState({ name: '', experience: '' })
	}

	render() {
		const {
			name,
			experience
		} = this.state

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
					onChange={this.handleChange} />

				<div className='header__second-line'>
					<select
						name='experience'
						value={experience}
						onChange={this.handleChange}>
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
						onClick={this.addSkill}>ADD SKILLS</button>
				</div>
			</section>
		)
	}
}

Header.propTypes = {
	addSkill: PropTypes.func
}


const mapDispatchToProps = dispatch => ({
	addSkill: skill => dispatch(addSkill(skill))
})

export default connect(undefined, mapDispatchToProps)(Header)

