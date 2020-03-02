import types from '../actions/types';


// Estado inicial
const initialState = {
  name: "",
  id_cancion_escuchada:[],
  id_album_buscado:[]
}

// Implementamos el reducer


const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.UPDATE_NAME:
      return {
        name: action.name,
        ...state
      };

    case types.ADD_TO_HISTORY:
      return {
        ...state, 
        id_cancion_escuchada:state.id_cancion_escuchada.concat(action.id)
      };
    case types.ALBUM_TO_HISTORY:
      return {
        ...state, 
        id_album_buscado:state.id_album_buscado.concat(action.id)
      };
    default:
        return state;
}
}

export default reducer;
