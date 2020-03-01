import types from '../actions/types';

// Estado inicial
const initialState = {
  nombre:"",
  apellido: "",
  email: "",
  telefono: "", 
  edad: ""
}


// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.UPDATE_NOMBRE:
      return {
        ...state,
        nombre: action.nombre
     
      };
    case types.UPDATE_APELLIDO:
      return {
        ...state,
        apellido: action.apellido
     
      };
      case types.UPDATE_EMAIL:
        return {
          ...state,
          email: action.email
        };
        case types.UPDATE_TELEFONO:
          return {
            ...state,
            telefono: action.telefono
          };
          case types.UPDATE_EDAD:
            return {
              ...state,
              edad: action.edad
            };
    default: 
      return state;
  }
}

export default reducer;