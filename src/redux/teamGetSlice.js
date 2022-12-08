import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "config/api";
import header from "config/header";

export const fetchTeam = createAsyncThunk("team/fetchTeam", async (token) => {
  try {
    const response = await axios.get(api().fetchTeamData, { headers: header(token).headerForJson });
    const data = await response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
});

export const teamGetReducer = createSlice({
  name: "teamData",
  initialState: {
    table: [],
    // tableContainer: [],
    status: true,
  },
  // reducers: {
  //   filterdTable: (state, action) => {
  //     state.table = state.tableContainer.filter((item, _) => {
  //       item.id === action.payload;
  //     });
  //   },
  // },
  extraReducers: {
    [fetchTeam.pending]: (state, action) => {
      // state.status = true;
    },
    [fetchTeam.fulfilled]: (state, action) => {
      state.status = false;
      // state.table = action.payload.data.products;
      state.table = action.payload.list;
      // state.tableContainer = action.payload.list;

      // state.table = action.data.list.length > 0 ? action.data.list : [];
    },
    [fetchTeam.rejected]: (state, action) => {
      state.status = true;
      state.status = "failed";
    },
  },
});
// export const { filterdTable } = teamGetReducer.actions;
export default teamGetReducer.reducer;
