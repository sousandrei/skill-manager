/* 
 basic redux store with thunk, to use async actions
 seting flag to use redux devtools on chrome
 seting all reducers for all entities
 */

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