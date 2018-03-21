import superagent from 'superagent'

export const getPokemonRequest = () => {
  // return superagent.get('https://api.github.com')
  return superagent.get('https://pokeapi.co/api/v2/pokemon/1/')
  .then(res => {
    console.log(res.body);
    return dispatch(getPokemon(res.body))
    // return res.body
  })
  .catch(err => {
    console.log('__ERROR__ :', err.message);
  })
}

export const getPokemon = pokemon => ({
  type: 'GET_POKEMON',
  payload: pokemon
})
