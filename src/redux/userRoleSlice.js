import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import header from "config/header";
import api from "config/api";

export const registerUser = createAsyncThunk("user/register", async (data) => {
  //   const response = await axios.get(
  //     "http://localhost:4200/api/artist/getartist/637659bc2b0df0c44b7d17c7"
  //   );
  // const data = await response.json();
  try {
    if (data.role == "admin") {
      var response = await axios.post(api().adminRegistration, data.values, {
        headers: header(data.token).headerForJson,
      });
    } else if (data.role == "superadmin") {
      var response = await axios.post(api().superAdminRegistration, data.values, {
        headers: header(data.token).headerForJson,
      });
    } else {
      var response = await axios.post(api().userRegistration, data.values, {
        headers: header(data.token).headerForJson,
      });
    }
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const userReducer = createSlice({
  name: "artists",
  initialState: {
    data: {},
    status: null,
  },
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state, action) => {
      state.status = "loading";
    },
    [registerUser.fulfilled]: (state, action) => {
      state.status = "success";
      state.data = action.payload;
    },
    [registerUser.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export default userReducer.reducer;
