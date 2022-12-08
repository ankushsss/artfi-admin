import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "config/api";
import header from "config/header";

export const addHeader = createAsyncThunk("offering/addHeader", async ({ form, token }) => {
  try {
    const response = await axios.post(api().addHeaderData, form, {
      headers: header(token).headerToUpdateForm,
    });
    const data = response.data;
    return data;
  } catch (e) {
    // console.log(e);
    return e;
  }
});

export const addOfferingHeader = createSlice({
  name: "addHeader",
  initialState: {
    data:[],
    status: true,
  },
  // reducers: {},
  extraReducers: {
    [addHeader.pending]: (state, action) => {
      // state.status = true;
    },
    [addHeader.fulfilled]: (state, action) => {
      state.status = false;
      // state.table = action.payload.data.products;
      state.data = action.payload;
      // console.log(action.payload.list, "action.payload.list");
      // console.log(action.payload, "action.payload");
      // state.table = action.data.list.length > 0 ? action.data.list : [];
    },
    [addHeader.rejected]: (state, action) => {
      state.status = true;
      state.status = "failed";
    },
  },
});
export default addOfferingHeader.reducer;
