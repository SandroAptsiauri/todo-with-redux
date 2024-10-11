import { configureStore, createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ text: action.payload, completed: false });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((_, index) => index !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos[action.payload];
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

export default store;
