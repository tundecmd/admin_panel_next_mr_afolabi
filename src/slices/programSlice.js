import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/auth";
import ProgramService from "../services/programService";
import axiosInstance from "../utils/axios";
// import { initialState } from "../store/index";

export const getPrograms = createAsyncThunk("/programs", async (thunkAPI) => {
  console.log("aaaaaa");
  try {
    const data = await ProgramService.getPrograms();
    console.log("data :>> ", data);
    return { programs: data };
  } catch (error) {
    console.log("error :>> ", error);
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue();
  }
});

const initialState = { programs: [] };

// const initialState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null };

const programSlice = createSlice({
  name: "program",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    // [register.fulfilled]: (state, action) => {
    //   state.isLoggedIn = false;
    // },
    // [register.rejected]: (state, action) => {
    //   state.isLoggedIn = false;
    // },
    [getPrograms.fulfilled]: (state, action) => {
      state.programs = action.payload.programs;
      // state.user = action.payload.user;
    },
    [getPrograms.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    // [logout.fulfilled]: (state, action) => {
    //   state.isLoggedIn = false;
    //   state.user = null;
    // },
  },
});

const { reducer } = programSlice;
export default reducer;
