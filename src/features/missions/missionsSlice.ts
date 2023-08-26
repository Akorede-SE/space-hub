import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export type missionProp = {
  description: string,
  mission_id: string,
  mission_name: string,
}
export type initialStateProp = {
  missions: missionProp[],
  loading: boolean,
  error: string | undefined,
}

const initialState: initialStateProp = {
  missions: [],
  loading: false,
  error: ''
}

export const getMissions = createAsyncThunk('missions/getMissions', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    const {data} = response;
    return data;
    
  } catch (error) {
    return error;    
  }
})

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.loading = false;
        const data = action.payload.map((mission: missionProp) => {
          const { description, mission_id, mission_name } = mission
          return { mission_id, mission_name, description };
        });
        state.missions = data;
      })
      .addCase(getMissions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
})

export default missionsSlice.reducer;