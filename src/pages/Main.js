/* 
 main page, uses header and cardlist
 loads all skills to store on mount
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getSkills } from '../actions/skills/skills'

import Header from '../components/Header/Header'
import CardList from '../components/CardList/CardList'

export class Main extends React.Component {
	componentWillMount() {
		this.props.getSkills()
	}

	render() {
		return (
			<section className='main'>
				<span className='main__title'>ADD YOUR SKILLS</span>
				<Header />

				<CardList
					skills={this.props.skills} />

			</section>
		)
	}
}

Main.propTypes = {
	skills: PropTypes.array,
	getSkills: PropTypes.func
}

const mapStateToProps = state => {
	return {
		skills: state.skills
	}
}

const mapDispatchToProps = dispatch => ({
	getSkills: () => dispatch(getSkills())
})


export default connect(mapStateToProps, mapDispatchToProps)(Main)

