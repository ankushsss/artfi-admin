import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiWithParams } from "config/api";
import header from "config/header";

export const deleteArtist = createAsyncThunk("artist/deleteArtist", async ({ token, id }) => {
  try {
    const response = await axios.get(apiWithParams(id).deleteArtist, {
      headers: header(token).headerForJson,
    });
    const data = response;
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
});

export const artistDeleteReducer = createSlice({
  name: "deleteArtist",
  initialState: {
    data: {},
    status: true,
  },
  // reducers: {},
  extraReducers: {
    [deleteArtist.pending]: (state, action) => {
      // state.status = true;
    },
    [deleteArtist.fulfilled]: (state, action) => {
      state.status = false;
      // state.table = action.payload.data.products;
      state.data = action.payload;
      // console.log(action.payload.list, "action.payload.list");
    },
    [deleteArtist.rejected]: (state, action) => {
      state.status = true;
      state.status = "failed";
    },
  },
});

export default artistDeleteReducer.reducer;
