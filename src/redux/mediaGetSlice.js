import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "config/api";
import header from "config/header";
import { useCookies } from "react-cookie";

export const fetchMedia = createAsyncThunk("media/fetchMedia", async (token) => {
  try {
    const response = await axios.get(api().fetchMediaData, {
      headers: header(token).headerForJson,
    });
    const data = await response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
});

export const mediaGetReducer = createSlice({
  name: "mediaData",
  initialState: {
    table: [],
    status: true,
  },
  // reducers: {},
  extraReducers: {
    [fetchMedia.pending]: (state, action) => {
      // state.status = true;
    },
    [fetchMedia.fulfilled]: (state, action) => {
      state.status = false;
      // state.table = action.payload.data.products;
      state.table = action.payload.list;
      // state.table = action.data.list.length > 0 ? action.data.list : [];
    },
    [fetchMedia.rejected]: (state, action) => {
      state.status = true;
      state.status = "failed";
    },
  },
});
export default mediaGetReducer.reducer;
