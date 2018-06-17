import thunk from 'redux-thunk'
import {
	compose,
	createStore,
	combineReducers,
	applyMiddleware
} from 'redux'

import skills from '../reducers/skills'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
	const store = createStore(
		combineReducers({
			skills,
		}),
		composeEnhancers(applyMiddleware(thunk))
	)

	return store
}