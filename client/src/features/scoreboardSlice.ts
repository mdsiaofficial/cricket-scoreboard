import { createSlice } from '@reduxjs/toolkit';

interface ScoreboardState {
  team1: number;
  team2: number;
  overs: number;
  wickets: number;
  runRate: number;
  requiredRunRate: number;
}

const initialState: ScoreboardState = {
  team1: 0,
  team2: 0,
  overs: 0,
  wickets: 0,
  runRate: 0,
  requiredRunRate: 0,
};

const scoreboardSlice = createSlice({
  name: 'scoreboard',
  initialState,
  reducers: {
    updateScore: (state, action) => {
      state.team1 = action.payload.team1;
      state.team2 = action.payload.team2;
      state.overs = action.payload.overs;
      state.wickets = action.payload.wickets;
      state.runRate = action.payload.runRate;
      state.requiredRunRate = action.payload.requiredRunRate;
    },
  },
});

export const { updateScore } = scoreboardSlice.actions;
export default scoreboardSlice.reducer;