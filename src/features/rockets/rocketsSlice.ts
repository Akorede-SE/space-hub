import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export type initialStateProp = {
  rockets: [],
  loading: boolean,
  error: string,
}
//description id name flickr_images[]
const initialState: initialStateProp = {
  rockets: [],
  loading: false,
  error: '',
}

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v4/rockets');
    const { data } = response;
    return data;
  } catch (error) {
    return error;
  }
})
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
});

export default rocketsSlice.reducer;