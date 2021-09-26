import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isAuthorized: false,
  },
  reducers: {
    setIsAuthorized(state, { payload }) {
      state.isAuthorized = payload;
    },
  },
});

export const { setIsAuthorized } = appSlice.actions;

export default appSlice.reducer;
