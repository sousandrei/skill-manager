import React from 'react'
import { shallow } from 'enzyme'

import Header from './Header'

test('should render header', () => {

	const wrapper = shallow(<Header
		name={''}
		experience={''} />)

	expect(wrapper).toMatchSnapshot()
})

