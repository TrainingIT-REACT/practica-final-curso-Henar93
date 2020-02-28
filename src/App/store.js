import { createStore,combineReducers,applyMiddleware ,compose} from "redux";
import promise from "redux-promise-middleware";

// Reducers

import user from './reducers/user';
import albums  from  "./storeMusic/albumsReducer";
import perfil from './reducers/perfil';

// Middlewares
import logger from './middlewares/logger';


//Combinación de middleware

const store = createStore(
  combineReducers({
    user,
    albums, 
    perfil
  }),
  compose(
    applyMiddleware(logger)
   ,applyMiddleware(promise))
);


export default store;
