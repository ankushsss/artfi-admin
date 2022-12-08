import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiWithParams } from "config/api";
import header from "config/header";

export const fetchSingleArtist = createAsyncThunk("artists/fetchSingleArtist", async (artist) => {
  try {
    const response = await axios.get(apiWithParams(artist.id).getSingleArtist, {
      headers: header(artist.token).headerForJson,
    });
    // console.log(response.data, "response");
    const data = await response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
});

export const artistSingleSlice = createSlice({
  name: "artists",
  initialState: {
    data: {},
    status: true,
  },
  // reducers: {},
  extraReducers: {
    [fetchSingleArtist.pending]: (state, action) => {
      // state.status = true;
    },
    [fetchSingleArtist.fulfilled]: (state, action) => {
      state.status = false;
      // state.table = action.payload.data.products;
      state.data = action.payload.artist[0];
      // console.log(action.payload.list, "action.payload.list");
      // console.log(action.payload, "action.payload");
      // state.table = action.data.list.length > 0 ? action.data.list : [];
    },
    [fetchSingleArtist.rejected]: (state, action) => {
      state.status = true;
      state.status = "failed";
    },
  },
});
export default artistSingleSlice.reducer;
