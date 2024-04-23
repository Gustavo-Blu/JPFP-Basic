import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProjectAsync = createAsyncThunk(
  'projects/fetchAll',
  async () => {
    const { data } = await axios.get('http://localhost:8080/api/projects');
    return data;
  }
);

export const allProjectSlice = createSlice({
  name: 'AllProjects',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProjectAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectAllProjects = (state) => state.AllProjects;

export default allProjectSlice.reducer;
