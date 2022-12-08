import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiWithParams } from "config/api";
import header from "config/header";

export const deleteMedia = createAsyncThunk("media/deleteMedia", async ({ token, id }) => {
  try {
    const response = await axios.delete(apiWithParams(id).deleteMedia, {
      headers: header(token).headerForJson,
    });
    const data = response;
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
});

export const mediaDeleteReducer = createSlice({
  name: "deleteTeam",
  initialState: {
    data: {},
    status: true,
  },
  // reducers: {},
  extraReducers: {
    [deleteMedia.pending]: (state, action) => {
      // state.status = true;
    },
    [deleteMedia.fulfilled]: (state, action) => {
      state.status = false;
      // state.table = action.payload.data.products;
      state.data = action.payload;
      // console.log(action.payload.list, "action.payload.list");
      // console.log(action.payload, "action.payload");
      // state.table = action.data.list.length > 0 ? action.data.list : [];
    },
    [deleteMedia.rejected]: (state, action) => {
      state.status = true;
      state.status = "failed";
    },
  },
});

export default mediaDeleteReducer.reducer;
