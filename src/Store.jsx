import { applyMiddleware, createStore } from 'redux';
import rootReducer  from './Reducers';
import logger from "redux-logger";
import thunk from 'redux-thunk';

const middleWares=[
    thunk
]
if (process.env.NODE_ENV === "development") {
    middleWares.push(logger);
  }

const store = createStore(rootReducer,applyMiddleware(...middleWares));

export default store;