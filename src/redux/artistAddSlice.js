import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "config/api";
import header from "config/header";

export const addArtist = createAsyncThunk("artists/addArtist", async ({ form, token }) => {
  try {
    const response = await axios.post(api().createArtist, form, {
      headers: header(token).headerForForm,
    });
    const data = await response.data;
    return data;
  } catch (e) {
    // console.log(e);
    return e;
  }
});

export const artistAddReducer = createSlice({
  name: "artistsAdd",
  initialState: {
    table: [],
    status: true,
  },
  // reducers: {},
  extraReducers: {
    [addArtist.pending]: (state, action) => {
      // state.status = true;
    },
    [addArtist.fulfilled]: (state, action) => {
      state.status = false;
      // state.table = action.payload.data.products;
      state.table = action.payload.list;
      // console.log(action.payload.list, "action.payload.list");
      // console.log(action.payload, "action.payload");
      // state.table = action.data.list.length > 0 ? action.data.list : [];
    },
    [addArtist.rejected]: (state, action) => {
      state.status = true;
      state.status = "failed";
    },
  },
});

export default artistAddReducer.reducer;
