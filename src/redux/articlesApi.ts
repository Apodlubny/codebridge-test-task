import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "../types";

axios.defaults.baseURL = "https://api.spaceflightnewsapi.net/v3/articles";

export const getLatestArticles = createAsyncThunk<
  Article[],
  undefined,
  { rejectValue: string }
>("getLatestArticles", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get("?_limit=42");
    return data;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});
