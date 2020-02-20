import { createStore,combineReducers,applyMiddleware } from "redux";
import promise from "redux-promise-middleware";

// Reducers

import user from './reducers/user';
import albums  from  "./storeMusic/albumsReducer";

// Middlewares
import logger from './middlewares/logger';

export default createStore(
  combineReducers({
    user,
    albums
  }),

 
  applyMiddleware(logger, promise)


);


