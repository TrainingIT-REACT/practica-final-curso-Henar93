import types from '../actions/types';

// Estado inicial
const initialState = {
  apellido: ""
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.UPDATE_APELLIDO:
      return {
        apellido: action.apellido
      };
    default: 
      return state;
  }
}

export default reducer;