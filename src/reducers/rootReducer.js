import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { moviesReducer } from "./moviesReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  movies: moviesReducer,
});
