import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export type initialStateProp = {
  rockets: RocketsProp[],
  loading: boolean,
  error: string | undefined,
}
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
export type RocketsProp = {
  name: string,
  description: string,
  id: string,
  flickr_images: string[],
  reserved?: boolean
}
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const id  = action.payload;
      const rocket = state.rockets.find((item: RocketsProp) => item.id === id);
      if (rocket) {
        rocket.reserved = true;
      }
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getRockets.pending, (state) => {
      state.loading = true;
    })
    .addCase(getRockets.fulfilled, (state, action) => {
      state.loading = false;
      const data = action.payload.map((item: RocketsProp) => {        
        const {name, description, id,  flickr_images} = item;
        return {name, description, id, flickr_images}
      })
      state.rockets = data;
      state.error = '';
    })
    .addCase(getRockets.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message
    })
  }
});

export const { reserveRocket } = rocketsSlice.actions;

export default rocketsSlice.reducer;