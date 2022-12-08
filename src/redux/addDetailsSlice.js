import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiWithParams } from "config/api";
import header from "config/header";

export const addDetailsPage = createAsyncThunk(
  "offering/addDetailsPage",
  async ({ form, token, id }) => {
    try {
      const response = await axios.post(apiWithParams(id).addDetailsPage, form, {
        headers: header(token).headerForForm,
      });
      const data = await response.data;
      return data;
    } catch (e) {
      // console.log(e);
      return e;
    }
  }
);

export const addDetailsReducer = createSlice({
  name: "addDetails",
  initialState: {
    details: {},
    status: true,
  },
  // reducers: {},
  extraReducers: {
    [addDetailsPage.pending]: (state, action) => {
      // state.status = true;
    },
    [addDetailsPage.fulfilled]: (state, action) => {
      state.status = false;
      state.details = action.payload;
    },
    [addDetailsPage.rejected]: (state, action) => {
      state.status = true;
      state.status = "failed";
    },
  },
});

export default addDetailsReducer.reducer;
