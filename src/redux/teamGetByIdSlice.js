import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiWithParams } from "config/api";
import header from "config/header";

export const fetchTeamById = createAsyncThunk("team/fetchTeamById", async (team) => {
  try {
    const response = await axios.get(apiWithParams(team.id).getTeamById, {
      headers: header(team.token).headerForJson,
    });
    // console.log(response.data, "response");
    const data = await response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
});

export const teamGetByIdSlice = createSlice({
  name: "team",
  initialState: {
    data: {},
    status: true,
  },
  // reducers: {},
  extraReducers: {
    [fetchTeamById.pending]: (state, action) => {
      // state.status = true;
    },
    [fetchTeamById.fulfilled]: (state, action) => {
      state.status = false;
      // state.table = action.payload.data.products;
      state.data = action.payload.artist;
      // console.log(action.payload.artist, "action.payload this reducer works fine");
      // console.log(action.payload, "action.payload");
      // state.table = action.data.list.length > 0 ? action.data.list : [];
    },
    [fetchTeamById.rejected]: (state, action) => {
      state.status = true;
      state.status = "failed";
    },
  },
});

export default teamGetByIdSlice.reducer;
