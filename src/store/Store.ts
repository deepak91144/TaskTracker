import { configureStore } from "@reduxjs/toolkit";
import { todos } from "./slice/TodoSlice";

const store = configureStore({
  reducer: { todoReducer: todos },
});

export default store;
