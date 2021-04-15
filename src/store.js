import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { DarkThemeReducer, TodoReducer } from "./reducers/ToDoReducers.js";

const reducer = combineReducers({
  //"root reducer"
  Todo /*name of reducer*/: TodoReducer, //slice reducers,
  Theme: DarkThemeReducer,
});

const initialState = {};

const middleware = [thunk]; //array of middlewares to be used

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
