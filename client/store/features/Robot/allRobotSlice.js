import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchRobotAsync = createAsyncThunk('robots/fetchAll', async () => {
  const { data } = await axios.get('http://localhost:8080/api/robots');
  return data;
});

export const allRobotSlice = createSlice({
  name: 'AllRobots',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRobotAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectAllRobots = (state) => state.AllRobots;

export default allRobotSlice.reducer;
