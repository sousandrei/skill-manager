import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import AppRouter from './routers/AppRouter'

import Loading from './pages/Loading'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
)

ReactDOM.render(<Loading />, document.getElementById('app'))

let hasRendered = false
const renderApp = () => {
	if (hasRendered)
		return

	ReactDOM.render(jsx, document.getElementById('app'))
	hasRendered = true
}


renderApp()