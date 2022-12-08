import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "config/api";
import header from "config/header";

export const addTeam = createAsyncThunk("team/addTeam", async ({ form, token }) => {
  try {
    const response = await axios.post(api().addTeamMember, form, {
      headers: header(token).headerForForm,
    });
    const data = response;
    return data;
  } catch (error) {
    // console.log(e);
    return error;
  }
});

export const teamAddReducer = createSlice({
  name: "teamAdd",
  initialState: {
    data: {},
    status: true,
  },
  // reducers: {},
  extraReducers: {
    [addTeam.pending]: (state, action) => {
      // state.status = true;
    },
    [addTeam.fulfilled]: (state, action) => {
      state.status = false;
      // state.table = action.payload.data.products;
      state.data = action.payload;
      // console.log(action.payload.list, "action.payload.list");
      // state.table = action.data.list.length > 0 ? action.data.list : [];
    },
    [addTeam.rejected]: (state, action) => {
      state.status = true;
      state.status = "failed";
    },
  },
});

export default teamAddReducer.reducer;
