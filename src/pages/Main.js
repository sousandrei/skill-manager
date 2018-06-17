import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
	addSkill,
	delSkill,
	getSkills
} from '../actions/skills'

import Header from '../components/Header/Header'
import CardList from '../components/CardList/CardList'

export class Main extends React.Component {
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

		this.props.addSkill({ name, experience })
		this.setState({ name: '', experience: '' })
	}

	delSkill = id => this.props.delSkill(id)

	render() {
		return (
			<section className='main'>
				<span className='main__title'>ADD YOUR SKILLS</span>
				<Header
					name={this.state.name}
					addSkill={this.addSkill}
					handleChange={this.handleChange}
					experience={this.state.experience} />

				<CardList
					skills={this.props.skills}
					delSkill={this.delSkill} />

			</section>
		)
	}
}

Main.propTypes = {
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


const mapDispatchToProps = dispatch => ({
	addSkill: id => dispatch(addSkill(id)),
	delSkill: id => dispatch(delSkill(id)),
	getSkills: () => dispatch(getSkills())
})


export default connect(mapStateToProps, mapDispatchToProps)(Main)

