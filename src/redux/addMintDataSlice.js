import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiWithParams } from "config/api";
import header from "config/header";

export const addMintSliceData = createAsyncThunk("mint/addData", async ({ id,mintData,token }) => {
  try {
    console.log(mintData)
    const response = await axios.post(apiWithParams(id).addMint,mintData, {
      headers: header(token).headerForJson,
    });
    const data = await response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
});

export const addMintSlice = createSlice({
  name: "mint",
  initialState: {
    data: {},
    status: true,
  },
  // reducers: {},
  extraReducers: {
    [addMintSliceData.pending]: (state, action) => {
      // state.status = true;
    },
    [addMintSliceData.fulfilled]: (state, action) => {
      state.status = false;
      state.data = action.payload.data;
      // console.log(action.payload.data, "offer from offer reducer ");
    },
    [addMintSliceData.rejected]: (state, action) => {
      state.status = true;
      state.status = "failed";
    },
  },
});

export default addMintSlice.reducer;

