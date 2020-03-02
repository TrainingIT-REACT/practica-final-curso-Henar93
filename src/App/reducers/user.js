import types from '../actions/types';

// Estado inicial
const initialState = {
  name: "",
  history:[]
}

// Implementamos el reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case types.UPDATE_NAME:
      return {
        name: action.name,
        history:state
      };
      case types.ADD_TO_HISTORY:
        return {
        history:action.song
      };
    default:
        return state;
  }
}

export default reducer;
