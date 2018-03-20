import superagent from 'superagent'

export const getPokemon = pokemon => ({
  type: 'GET_POKEMON',
  payload: pokemon
})

export const getPokemonRequest = () => {
  console.log('in action');
  return superagent.get('http://pokeapi.co/api/v2/pokemon/1')
  .then(res => {
    console.log(res.body);
    dispatch(getPokemon(res.body))
    return res.body
  })
  .catch(err => {
    console.log('__ERROR__ :', err.message);
  })
}
