import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getLatestArticles } from "../redux/articlesApi";
import { ArticlesState } from "../helpers/types";

const initialState: ArticlesState = {
  list: [],
  loading: false,
  error: null,
  filter: "",
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLatestArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getLatestArticles.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(getLatestArticles.rejected, (state, actions) => {
        state.loading = false;
        state.error = actions.payload;
      });
  },
});

export const { setFilter } = articlesSlice.actions;

export default articlesSlice.reducer;
