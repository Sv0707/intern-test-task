import issuesReducer from "./issues/issuesReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { issues: issuesReducer },
});

export { store };
