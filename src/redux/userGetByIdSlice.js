import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiWithParams } from "config/api";
import header from "config/header";

export const fetchUserById = createAsyncThunk("users/fetchUserById", async (user) => {
  try {
    const response = await axios.get(apiWithParams(user.id).getUserById, {
      headers: header(user.token).headerForJson,
    });
    // console.log(response.data, "response");
    const data = await response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
});

export const userGetByIdSlice = createSlice({
  name: "users",
  initialState: {
    data: {},
    status: true,
  },
  // reducers: {},
  extraReducers: {
    [fetchUserById.pending]: (state, action) => {
      // state.status = true;
    },
    [fetchUserById.fulfilled]: (state, action) => {
      state.status = false;
      // state.table = action.payload.data.products;
      state.data = action.payload;
      // console.log(action.payload, "action.payload");
      // state.table = action.data.list.length > 0 ? action.data.list : [];
    },
    [fetchUserById.rejected]: (state, action) => {
      state.status = true;
      state.status = "failed";
    },
  },
});

export default userGetByIdSlice.reducer;
