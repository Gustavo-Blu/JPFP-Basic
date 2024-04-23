import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const singleRobotSlice = createSlice({
  name: 'singleRobot',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {},
});

export const selectSingleRobot = (state) => state.singleRobot;

export default singleRobotSlice.reducer;
