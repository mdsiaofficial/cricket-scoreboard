import { configureStore } from '@reduxjs/toolkit';
import scoreboardReducer from './features/scoreboardSlice';
import batsmenBowlersReducer from './features/batsmenBowlersSlice';
import matchStatusReducer from './features/matchStatusSlice';

const store = configureStore({
  reducer: {
    scoreboard: scoreboardReducer,
    batsmenBowlers: batsmenBowlersReducer,
    matchStatus: matchStatusReducer,
  },
});

export default store;