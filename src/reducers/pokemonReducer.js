const initialState = {
  pokemon: null,
};

export default function pokemonReducer(state = initialState, action){
  switch(action.type){
    case 'GET_POKEMON':
     return Object.assign({}, state, {
      poekmon: action.payload
    })
    default: return state
  }
}
