import thunk from 'react-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import indexReducer from './index.js'

const reducer = combineReducers({
    index: indexReducer
})
export default createStore(reducer, applyMiddleware(thunk))