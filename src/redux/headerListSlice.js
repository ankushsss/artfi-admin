import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "config/api";
import header from "config/header";
import { useCookies } from "react-cookie";

export const fetchHeaderList = createAsyncThunk("offering/fetchHeaderList", async (token) => {
  try {
    const response = await axios.get(api().fetchHeaderData, {
      headers: header(token).headerForJson,
    });
    const data = await response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
});

export const headerListReducer = createSlice({
  name: "mediaData",
  initialState: {
    table: [],
    status: true,
  },
  // reducers: {},
  extraReducers: {
    [fetchHeaderList.pending]: (state, action) => {
      // state.status = true;
    },
    [fetchHeaderList.fulfilled]: (state, action) => {
      state.status = false;
      // state.table = action.payload.data.products;
      state.table = action.payload.data;
      // state.table = action.data.list.length > 0 ? action.data.list : [];
    },
    [fetchHeaderList.rejected]: (state, action) => {
      state.status = true;
      state.status = "failed";
    },
  },
});
export default headerListReducer.reducer;
