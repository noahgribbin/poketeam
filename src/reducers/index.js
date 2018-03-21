import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer.js'

const reducer = combineReducers({
  pokemonReducer,
})

export default reducer;
