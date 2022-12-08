import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "config/api";
import header from "config/header";

export const updateArtist = createAsyncThunk("artists/updateArtist", async ({ form, token }) => {
  try {
    const response = await axios.post(api().updateArtist, form, {
      headers: header(token).headerToUpdateForm,
    });
    const data = response.data;
    return data;
  } catch (e) {
    // console.log(e);
    return e;
  }
});

export const artistUpdateReducer = createSlice({
  name: "updateArtist",
  initialState: {
    table: [],
    status: true,
  },
  // reducers: {},
  extraReducers: {
    [updateArtist.pending]: (state, action) => {
      // state.status = true;
    },
    [updateArtist.fulfilled]: (state, action) => {
      state.status = false;
      // state.table = action.payload.data.products;
      state.table = action.payload.list;
      // console.log(action.payload.list, "action.payload.list");
      // console.log(action.payload, "action.payload");
      // state.table = action.data.list.length > 0 ? action.data.list : [];
    },
    [updateArtist.rejected]: (state, action) => {
      state.status = true;
      state.status = "failed";
    },
  },
});
export default artistUpdateReducer.reducer;
