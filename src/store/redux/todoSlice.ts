import { createSlice } from '@reduxjs/toolkit';
import { ITodo } from '../../types/types';

interface TodosState {
  todos: Array<ITodo>;
}

const initialState: TodosState = {
  todos: [],
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
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
