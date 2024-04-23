import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const singleProjectSlice = createSlice({
  name: 'singleProject',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {},
});

export const selectSingleProject = (state) => state.singleProject;

export default singleProjectSlice.reducer;
