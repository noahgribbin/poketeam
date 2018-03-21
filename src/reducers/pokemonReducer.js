const initialState = {
  pokemon: null,
};

export default function pokemonReducer(state = initialState, action){
  switch(action.type){
    case 'GET_POKEMON':
    console.log('in get pokemon')
     return Object.assign({}, state, {
      pokemon: action.payload
    })
    default: return state
  }
}
