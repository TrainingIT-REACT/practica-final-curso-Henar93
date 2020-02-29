import types from '../actions/types';

// Estado inicial
const initialState = {
  apellido: "",
  email: "",
  telefono: "", 
  edad: ""
}


// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.UPDATE_APELLIDO:
      return {
        apellido: action.apellido,
        email:state
      };
      case types.UPDATE_EMAIL:
        return {
          email: action.email
        };
        case types.UPDATE_TELEFONO:
          return {
            telefono: action.telefono
          };
          case types.UPDATE_EDAD:
            return {
              edad: action.edad
            };
    default: 
      return state;
  }
}

export default reducer;