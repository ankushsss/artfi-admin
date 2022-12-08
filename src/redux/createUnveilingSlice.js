import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiWithTwoParams } from "config/api";
import header from "config/header";

export const createUnveiling = createAsyncThunk(
  "offering/createUnveiling",
  async ({ form, token, id, buttonType }) => {
    try {
      const response = await axios.post(apiWithTwoParams(id, buttonType).createUnveiling, form, {
        headers: header(token).headerForJson,
      });
      const data = response.data;
      return data;
    } catch (e) {
      console.log(e);
      return e;
    }
  }
);

export const createUnveilingSlice = createSlice({
  name: "announcement",
  initialState: {
    data: {},
    status: true,
  },
  // reducers: {},
  extraReducers: {
    [createUnveiling.pending]: (state, action) => {},
    [createUnveiling.fulfilled]: (state, action) => {
      state.status = false;
      state.data = action.payload;
      // console.log(action.payload, "action.payload");
    },
    [createUnveiling.rejected]: (state, action) => {
      state.status = true;
      state.status = "failed";
    },
  },
});
export default createUnveilingSlice.reducer;
