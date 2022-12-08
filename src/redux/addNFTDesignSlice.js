import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiWithParams } from "config/api";
import header from "config/header";

export const addNFTDesign = createAsyncThunk(
  "offering/addNFTDesign",
  async ({ form, token, id }) => {
    try {
      const response = await axios.post(apiWithParams(id).addNFTDesign, form, {
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

export const addNFTDesignReducer = createSlice({
  name: "postNFT",
  initialState: {
    details: {},
    status: true,
  },
  // reducers: {},
  extraReducers: {
    [addNFTDesign.pending]: (state, action) => {
      // state.status = true;
    },
    [addNFTDesign.fulfilled]: (state, action) => {
      state.status = false;
      state.details = action.payload;
    },
    [addNFTDesign.rejected]: (state, action) => {
      state.status = true;
      state.status = "failed";
    },
  },
});

export default addNFTDesignReducer.reducer;
