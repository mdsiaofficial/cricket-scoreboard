import { createSlice } from '@reduxjs/toolkit';

interface MatchStatusState {
  status: string;
}

const initialState: MatchStatusState = {
  status: 'Upcoming',
};

const matchStatusSlice = createSlice({
  name: 'matchStatus',
  initialState,
  reducers: {
    fetchMatchStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { fetchMatchStatus } = matchStatusSlice.actions;
export default matchStatusSlice.reducer;