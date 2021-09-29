import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import todoSlice from './todoSlice';
const store = configureStore({
  reducer: { app: appSlice, todos: todoSlice },
});

export type RootState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch
export default store;
