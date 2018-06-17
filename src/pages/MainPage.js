import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
	addSkill,
	delSkill,
	getSkills
} from '../actions/skills'

export class MainPage extends React.Component {
	state = {
		name: '',
		experience: ''
	}

	componentWillMount() {
		this.props.getSkills()
	}

	handleChange = e =>
		this.setState({ [e.target.name]: e.target.value })


	addSkill = () => {
		const {
			name,
			experience
		} = this.state

		if (!name)
			return alert('porra kd o nome')

		if (!experience)
			return alert('porra kd o exp')

		this.props.addSkill({ name, experience })
		this.setState({ name: '', experience: '' })
	}

	delSkill = id => this.props.delSkill(id)

	render() {
		return (
			<section>
				add your skills
				<input
					name='name'
					type='text'
					value={this.state.name}
					onChange={this.handleChange} />

				<select
					name='experience'
					value={this.state.experience}
					onChange={this.handleChange}>
					<option value='' disabled hidden>experience</option>
					<option value='a'>a</option>
					<option value='b'>b</option>
					<option value='c'>c</option>
				</select>

				<button type='button' onClick={this.addSkill}>Click Me!</button>


				{this.props.skills.map((s, i) => (
					<div key={i}>
						<span>{i}</span>
						<span>{s.name}</span>
						<span>{s.experience}</span>
						<button type='button'
							onClick={() => this.delSkill(s.id)}>x</button>
					</div>
				))}

			</section>
		)
	}
}

MainPage.propTypes = {
	addSkill: PropTypes.func,
	delSkill: PropTypes.func,
	getSkills: PropTypes.func,
	skills: PropTypes.array
}

const mapStateToProps = state => {
	return {
		skills: state.skills
	}
}


const mapDispatchToProps = dispatch => {
	return {
		addSkill: id => dispatch(addSkill(id)),
		delSkill: id => dispatch(delSkill(id)),
		getSkills: () => dispatch(getSkills())
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPage)

