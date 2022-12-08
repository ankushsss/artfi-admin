import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiWithParams } from "config/api";
import header from "config/header";

export const getOfferById = createAsyncThunk("offer/getOfferById", async ({ id, token }) => {
  try {
    const response = await axios.get(apiWithParams(id).getOfferById, {
      headers: header(token).headerForJson,
    });
    const data = await response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
});

export const getOfferByIdSlice = createSlice({
  name: "offer",
  initialState: {
    data: {},
    status: true,
  },
  // reducers: {},
  extraReducers: {
    [getOfferById.pending]: (state, action) => {},
    [getOfferById.fulfilled]: (state, action) => {
      state.status = false;
      state.data = action.payload.data;
      // console.log(state.data, "offer from offer reducer ");
    },
    [getOfferById.rejected]: (state, action) => {
      state.status = true;
      state.status = "failed";
    },
  },
});

export default getOfferByIdSlice.reducer;
