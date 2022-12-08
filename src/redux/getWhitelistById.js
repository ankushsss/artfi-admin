import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiWithParams } from "config/api";
import header from "config/header";

export const getWhitelistById = createAsyncThunk(
  "whitelist/getWhitelistById",
  async ({ id, token }) => {
    try {
      const response = await axios.get(apiWithParams(id).getWhitelistById, {
        headers: header(token).headerForForm,
      });
      const data = await response.data;
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const getWhitelistByIdSlice = createSlice({
  name: "offer",
  initialState: {
    data: {},
    status: true,
  },
  // reducers: {},
  extraReducers: {
    [getWhitelistById.pending]: (state, action) => {},
    [getWhitelistById.fulfilled]: (state, action) => {
      state.status = false;
      state.data = action.payload.data;
      // console.log(state.data, "offer from offer reducer ");
    },
    [getWhitelistById.rejected]: (state, action) => {
      state.status = true;
      state.status = "failed";
    },
  },
});

export default getWhitelistByIdSlice.reducer;
