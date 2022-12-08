import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiWithTwoParams } from "config/api";
import header from "config/header";

export const createAnnouncement = createAsyncThunk(
  "offering/createAnnouncement",
  async ({ form, token, id, buttonType }) => {
    try {
      const response = await axios.post(apiWithTwoParams(id, buttonType).createAnnouncement, form, {
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

export const createNewAnnouncement = createSlice({
  name: "announcement",
  initialState: {
    data: {},
    status: true,
  },
  // reducers: {},
  extraReducers: {
    [createAnnouncement.pending]: (state, action) => {
      // state.status = true;
    },
    [createAnnouncement.fulfilled]: (state, action) => {
      state.status = false;
      state.data = action.payload;
      // console.log(action.payload, "action.payload");
    },
    [createAnnouncement.rejected]: (state, action) => {
      state.status = true;
      state.status = "failed";
    },
  },
});
export default createNewAnnouncement.reducer;
