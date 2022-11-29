import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import programReducer from "../slices/programSlice";
// import messageReducer from "./slices/message";

const reducer = combineReducers({
  auth: authReducer,
  program: programReducer,
  //   message: messageReducer,
});

export const initialState = {
  isUserLoggedIn: true,
  user: null,
  programs: [],
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
