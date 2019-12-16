// import thunk from 'react-thunk'
// import { createStore, applyMiddleware, combineReducers } from 'redux'
// import indexReducer from './index.js'

// const reducer = combineReducers({
//     index: indexReducer
// })
// export default createStore(reducer, applyMiddleware(thunk))

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import indexReducer from './index';

const reducer = combineReducers({
    index: indexReducer
});

//create store
export const getServeStore = () => createStore(reducer, applyMiddleware(thunk));

export const getClientStore = () => {
    const defaultData = window._defaultData ? window._defaultData : {}
    return createStore(reducer, defaultData, applyMiddleware(thunk));
};