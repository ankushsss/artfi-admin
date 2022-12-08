import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiWithParams } from "config/api";
import header from "config/header";

export const updateMedia = createAsyncThunk("media/updateMedia", async ({ form, token, id }) => {
  try {
    const response = await axios.post(apiWithParams(id).updateMedia, form, {
      headers: header(token).headerToUpdateForm,
    });
    const data = response.data;
    return data;
  } catch (e) {
    // console.log(e);
    return e;
  }
});

export const mediaUpdateReducer = createSlice({
  name: "updateMedia",
  initialState: {
    table: [],
    status: true,
  },
  // reducers: {},
  extraReducers: {
    [updateMedia.pending]: (state, action) => {
      // state.status = true;
    },
    [updateMedia.fulfilled]: (state, action) => {
      state.status = false;
      // state.table = action.payload.data.products;
      state.table = action.payload;
      console.log(action.payload, "action.payload");
      // console.log(action.payload, "action.payload");
      // state.table = action.data.list.length > 0 ? action.data.list : [];
    },
    [updateMedia.rejected]: (state, action) => {
      state.status = true;
      state.status = "failed";
    },
  },
});
export default mediaUpdateReducer.reducer;
