import { combineReducers } from "@reduxjs/toolkit";
import personalInfoReducer from "./features/personalInfoSlice";
import statsReducer from "./features/statsSlice";
import skillsReducer from "./features/skillsSlice";
import resumeReducer from "./features/resumeSlice";
import contactReducer from "./features/contactSlice";
import portfolioCategoriesReducer from "./features/portfolioCategoriesSlice";
import portfolioReducer from "./features/portfolioSlice";

const rootReducer = combineReducers({
  personalInfo: personalInfoReducer,
  stats: statsReducer,
  skills: skillsReducer,
  resume: resumeReducer,
  contact: contactReducer,
  portfolioCategories: portfolioCategoriesReducer,
  portfolios: portfolioReducer,
  // Add other reducers here if needed
});

export default rootReducer;
