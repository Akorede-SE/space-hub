import { configureStore } from "@reduxjs/toolkit";
import rocketsReducer from '../features/rockets/rocketsSlice';
import missionsReducer from '../features/missions/missionsSlice';

export const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
