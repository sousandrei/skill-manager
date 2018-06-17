import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { delSkill } from '../actions/skills'

export class Card extends React.Component {

	render() {
		const {
			index,
			delSkill,
			skill: {
				id,
				name,
				experience
			}
		} = this.props

		return (
			<div>
				<span>{index}</span>
				<span>{name}</span>
				<span>{experience}</span>
				<button type='button'
					onClick={() => delSkill(id)}>x</button>
			</div>
		)
	}
}

Card.propTypes = {
	index: PropTypes.number,
	skill: PropTypes.object,
	delSkill: PropTypes.func
}

const mapDispatchToProps = dispatch => ({
	delSkill: id => dispatch(delSkill(id))
})

export default connect(undefined, mapDispatchToProps)(Card)