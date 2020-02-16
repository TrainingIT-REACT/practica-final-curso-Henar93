import { createStore, combineReducers, applyMiddleware } from "redux";

// Reducers

import user from './reducers/user';

// Middlewares
import logger from './middlewares/logger';

export default createStore(
  user,
  applyMiddleware(logger)
);
