import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiWithParams } from "config/api";
import header from "config/header";

export const editRole = createAsyncThunk("usersData/editRole", async (user) => {
  try {
    const response = await axios.post(apiWithParams(user.id).editUser, user.data, {
      headers: header(user.token).headerForJson,
    });
    const data = await response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
});

export const userEditRole = createSlice({
  name: "EditUsersData",
  initialState: {
    data: {},
    status: true,
  },
  // reducers: {},
  extraReducers: {
    [editRole.pending]: (state, action) => {
      //   state.status = false;
      state.status = false;
    },
    [editRole.fulfilled]: (state, action) => {
      state.status = false;
      state.data = action.payload;
      // console.log(action.payload.list, "action.payload.list");
    },
    [editRole.rejected]: (state, action) => {
      state.status = true;
      //   state.mssg = "failed";
    },
  },
});
export default userEditRole.reducer;
