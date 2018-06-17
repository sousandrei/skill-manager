import React from 'react'

import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import MainPage from '../pages/MainPage'
import NotFoundPage from '../pages/NotFoundPage'

export const history = createBrowserHistory()

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<Route component={MainPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
)

export default AppRouter