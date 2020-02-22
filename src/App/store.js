import { createStore,combineReducers,applyMiddleware ,compose} from "redux";
import promise from "redux-promise-middleware";

// Reducers

import user from './reducers/user';
import albums  from  "./storeMusic/albumsReducer";

// Middlewares
import logger from './middlewares/logger';


//Combinación de middleware

const store = createStore(
  combineReducers({
    user,
    albums
  }),
  compose(
    applyMiddleware(logger)
   ,applyMiddleware(promise))
);


export default store;
