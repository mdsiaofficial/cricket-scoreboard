import { createSlice } from '@reduxjs/toolkit';

interface BatsmenBowlersState {
  batsmen: Batsman[];
  bowlers: Bowler[];
}

const initialState: BatsmenBowlersState = {
  batsmen: [],
  bowlers: [],
};

const batsmenBowlersSlice = createSlice({
  name: 'batsmenBowlers',
  initialState,
  reducers: {
    fetchBatsmenBowlers: (state, action) => {
      state.batsmen = action.payload.batsmen;
      state.bowlers = action.payload.bowlers;
    },
  },
});

export const { fetchBatsmenBowlers } = batsmenBowlersSlice.actions;
export default batsmenBowlersSlice.reducer;

interface Batsman {
  name: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  strikeRate: number;
}

interface Bowler {
  name: string;
  overs: number;
  maidens: number;
  runs: number;
  wickets: number;
  economyRate: number;
}