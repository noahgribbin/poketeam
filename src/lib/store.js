import reducer from '../reducers/index.js'
import thunk from './reduxThunk'
import {createStore, applyMiddleware} from 'redux'


export default createStore(reducer, applyMiddleware(thunk))
