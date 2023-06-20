import { createStore, combineReducers } from "redux";

import datasReducer from "./reducers/datasReducer";

import categoriesReducer from "./reducers/categoriesReducer";

const rootReducer = combineReducers({
  datasState: datasReducer,
  categoriesState: categoriesReducer,
});

const store = createStore(rootReducer);

export default store;
