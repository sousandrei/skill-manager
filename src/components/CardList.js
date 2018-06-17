import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card'

const CardList = ({
	skills
}) =>
	(
		<div className='card-list'>
			{skills.map((s, i) =>
				<Card key={i} index={i} skill={s} />)}
		</div>
	)

CardList.propTypes = {
	skills: PropTypes.array
}

export default CardList

