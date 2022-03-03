import {createStore, applyMiddleware, combineReducers} from 'redux' ;
import thunk from 'redux-thunk'
import apiReducer from '../reducers/loginReducers.js';
 
const rootReducer = combineReducers({apiReducer})

export const Store = createStore(rootReducer, applyMiddleware(thunk))