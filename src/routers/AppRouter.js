/* 
 basic router, possible to expand
 */

import React from 'react'

import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Main from '../pages/Main'
import NotFound from '../pages/NotFound'

export const history = createBrowserHistory()

const AppRouter = () => (
	<Router history={history}>
		<Switch>
			<Route component={Main} />
			<Route component={NotFound} />
		</Switch>
	</Router>
)

export default AppRouter