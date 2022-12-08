import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiWithParams } from "config/api";
import header from "config/header";

export const createWhitelist = createAsyncThunk(
  "offering/createWhitelist",
  async ({ form, token, id }) => {
    try {
      const response = await axios.post(apiWithParams(id).createWhitelist, form, {
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

export const createWhitelistReducer = createSlice({
  name: "createWhitelist",
  initialState: {
    whitelist: {},
    status: true,
  },
  // reducers: {},
  extraReducers: {
    [createWhitelist.pending]: (state, action) => {
      // state.status = true;
    },
    [createWhitelist.fulfilled]: (state, action) => {
      state.status = false;
      state.whitelist = action.payload;
    },
    [createWhitelist.rejected]: (state, action) => {
      state.status = true;
      state.status = "failed";
    },
  },
});

export default createWhitelistReducer.reducer;
