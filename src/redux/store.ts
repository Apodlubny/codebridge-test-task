import { configureStore } from "@reduxjs/toolkit";

import articles from "./articlesReducer";

const store = configureStore({
  reducer: articles,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
