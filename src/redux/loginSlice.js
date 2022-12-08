import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {apiWithParams} from "config/api";
import header from "config/header";
import { useCookies } from "react-cookie";
import api from "config/api";


export const login = createAsyncThunk("login", async ({user,role}) => {
  try {
    var response
    if(role == "superadmin")
    {
     response = await axios.post(
       api().superAdminLogin, user, header().headerForJson
    );
    }
    else if(role == "admin")
    {
        response = await axios.post(
        api().adminLogin, user, header().headerForJson);
    }
    else
    {
        response = await axios.post(
        api().userLogin, user, header().headerForJson);

    }
    // console.log(response.data, "response");
    const data = await response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
});

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    data: {},
    status: true,
  },
  // reducers: {},
  extraReducers: {
    [login.pending]: (state, action) => {
    //   state.status = false;
    state.status = false;

    },
    [login.fulfilled]: (state, action) => {
      state.status = false;
      // state.table = action.payload.data.products;
      state.data = action.payload;
      // console.log(action.payload.list, "action.payload.list");
      // console.log(action.payload, "action.payload");
      // state.table = action.data.list.length > 0 ? action.data.list : [];
    },
    [login.rejected]: (state, action) => {
      state.status = true;
    //   state.mssg = "failed";
    },
  },
});
export default loginSlice.reducer;
