import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "config/api";
import header from "config/header";

export const addMediaData = createAsyncThunk("media/addMedia", async ({ form, token }) => {
  try {
    const response = await axios.post(api().addMedia, form, {
      headers: header(token).headerForForm,
    });
    // const data =   response.data;
    return response;
  } catch (error) {
    console.log(error, "fun");
    return error;
  }
});

export const mediaAddReducer = createSlice({
  name: "mediaAdd",
  initialState: {
    data: {},
    status: true,
  },
  // reducers: {},
  extraReducers: {
    [addMediaData.pending]: (state, action) => {
      //   state.status = true;
    },
    [addMediaData.fulfilled]: (state, action) => {
      state.status = false;
      // state.table = action.payload.data.products;
      state.data = action.payload;
      // state.table = action.data.list.length > 0 ? action.data.list : [];
    },
    [addMediaData.rejected]: (state, action) => {
      //   state.status = true;
      state.status = "failed";
    },
  },
});

export default mediaAddReducer.reducer;
