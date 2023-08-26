import { createSlice } from "@reduxjs/toolkit";

export type initialStateProp = {
  desc: string
}
const initialState: initialStateProp = {
  desc: ''
}

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers:{},
})

export default missionsSlice.reducer;