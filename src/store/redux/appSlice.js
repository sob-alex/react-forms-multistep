import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isAuthorized: true,
  },
  reducers: {
    setIsAuthorized(state, { payload }) {
      state.isAuthorized = payload;
    },
  },
});

export const { setIsAuthorized } = appSlice.actions;

export default appSlice.reducer;
