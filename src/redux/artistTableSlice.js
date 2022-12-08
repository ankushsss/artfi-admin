import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "config/api";
import header from "config/header";

export const fetchArtists = createAsyncThunk("artists/fetchArtists", async (token) => {
  try {
    const response = await axios.get(api().getArtists, { headers: header(token).headerForForm });
    const data = await response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
});

export const artistsReducer = createSlice({
  name: "artists",
  initialState: {
    table: [],
    status: true,
  },
  // reducers: {},
  extraReducers: {
    [fetchArtists.pending]: (state, action) => {},
    [fetchArtists.fulfilled]: (state, action) => {
      state.status = false;
      state.table = action.payload.list;
    },
    [fetchArtists.rejected]: (state, action) => {
      state.status = true;
      state.status = "failed";
    },
  },
});
export default artistsReducer.reducer;
