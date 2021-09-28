import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, { payload }) {
      state.todos.push(payload);
    },
    removeTodo(state, { payload }) {
      const newTodos = state.todos.filter(
        ({ id }) => id !== payload.id
      );
      state.todos = newTodos;
    },
    editTodo(state, { payload }) {
      const newTodos = state.todos.map((todo) =>
        todo.id === payload.id
          ? { ...todo, ...payload }
          : todo
      );
      state.todos = newTodos;
    },
  },
});

export const { addTodo, removeTodo, editTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
