import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import todoSlice from './todoSlice';
const store = configureStore({
  reducer: { app: appSlice, todos: todoSlice },
});

export default store;
