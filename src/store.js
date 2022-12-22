import {createStore, applyMiddleware, compose} from "redux";
import allReducers from "./allReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
  );

const store = createStore(allReducers, enhancer);

export default store;