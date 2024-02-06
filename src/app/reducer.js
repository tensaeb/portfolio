import { combineReducers } from "@reduxjs/toolkit";
import personalInfoReducer from "./features/personalInfoSlice";

const rootReducer = combineReducers({
  personalInfo: personalInfoReducer,
  // Add other reducers here if needed
});

export default rootReducer;
