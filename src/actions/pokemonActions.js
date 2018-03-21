import superagent from 'superagent'
import randomNumber from '../utils/randomNumber'

export const fetchRandomPokemon = () => {
  var num = randomNumber(802)
  return superagent.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
}

export const getPokemonRequest = () => {
  return function(dispatch){
    return fetchRandomPokemon()
    .then(res => {
      console.log(res.body);
      dispatch(getPokemon(res.body))
      return res.body
    })
    .catch(err => {
      console.log('__ERROR__ :', err.message);
    })    
  }
}

export const getPokemon = pokemon => ({
  type: 'GET_POKEMON',
  payload: pokemon
})
