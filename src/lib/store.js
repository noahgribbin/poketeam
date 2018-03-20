import reducer from '../reducers/index.js'
import thunk from './reduxThunk'
import {createStore, applyMiddleware} from 'redux'

let storeCreate = () =>
  createStore(reducer, applyMiddleware(thunk))

export default storeCreate
