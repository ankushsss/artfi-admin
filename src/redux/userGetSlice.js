import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "config/api";
import header from "config/header";

export const fetchUser = createAsyncThunk("usersData/fetchUser", async (token) => {
  try {
    const response = await axios.get(api().getUsers, { headers: header(token).headerForForm });
    // console.log(response.data, "response");
    const data = await response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
});

export const userGetReducer = createSlice({
  name: "usersData",
  initialState: {
    table: [],
    status: true,
  },
  // reducers: {},
  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      // state.status = true;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.status = false;
      // state.table = action.payload.data.products;
      state.table = action.payload.data;
      // state.table = action.data.list.length > 0 ? action.data.list : [];
    },
    [fetchUser.rejected]: (state, action) => {
      state.status = true;
      state.status = "failed";
    },
  },
});
export default userGetReducer.reducer;
