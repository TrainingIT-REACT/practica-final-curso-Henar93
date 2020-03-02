import types from '../actions/types';


// Estado inicial
const initialState = {
  name: "",
  id_canciones_escuchadas:[],
  id_albumes_buscados:[]
}

// Implementamos el reducer


const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.UPDATE_NAME:
      return {
        name: action.name,
        id_cancion:state
      };

      case types.ADD_TO_HISTORY:
        return {
          
          id_canciones_escuchadas:state.id_canciones_escuchadas.concat(action.id)
        };
        case types.ALBUM_TO_HISTORY:
          return {
            
            id_albumes_buscados:state.id_albumes_buscados.concat(action.id)
          };
    default:
        return state;
}
}

export default reducer;
