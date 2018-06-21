import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { delSkill } from '../../actions/skills/skills'

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
			<div className='card'>
				<span className='card__index'>{index + 1}</span>
				<div className='card__text'>
					<span className='card__name'>{name}</span>
					<span className='card__exp'>{experience}</span>
				</div>
				<button
					className='card__button'
					type='button'
					onClick={() => delSkill(id)}>
					<i className='fas fa-times'></i>
				</button>
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