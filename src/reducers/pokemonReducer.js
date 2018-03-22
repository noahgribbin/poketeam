const initialState = {
  pokemon: null,
  location: null,
};

export default function pokemonReducer(state = initialState, action){
  switch(action.type){
    case 'GET_POKEMON':
    console.log('in GET_POKEMON')
     return Object.assign({}, state, {
      pokemon: action.payload
    })
    case 'GET_LOCATION':
    console.log('in GET_LOCATION')
     return Object.assign({}, state, {
      location: action.payload
    })
    default: return state
  }
}
