import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiWithParams } from "config/api";
import header from "config/header";

export const deleteOffer = createAsyncThunk("offering/deleteOffer", async ({ form, token }) => {
  try {
    const response = await axios.delete(apiWithParams().deleteoffering, form, {
      headers: header(token).headerForJson,
    });
    const data = response.data;
    return data;
  } catch (e) {
    // console.log(e);
    return e;
  }
});

export const deleteOfferSlice = createSlice({
  name: "deleteOffer",
  initialState: {
    data: [],
    status: true,
  },
  // reducers: {},
  extraReducers: {
    [deleteOffer.pending]: (state, action) => {
      // state.status = true;
    },
    [deleteOffer.fulfilled]: (state, action) => {
      state.status = false;
      // state.table = action.payload.data.products;
      state.data = action.payload;
      // console.log(action.payload.list, "action.payload.list");
      // console.log(action.payload, "action.payload");
      // state.table = action.data.list.length > 0 ? action.data.list : [];
    },
    [deleteOffer.rejected]: (state, action) => {
      state.status = true;
      state.status = "failed";
    },
  },
});
export default deleteOfferSlice.reducer;
