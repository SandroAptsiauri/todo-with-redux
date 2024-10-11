import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import AddTodo from "./components/addTodo";
import TodoList from "./components/todoList";
import CompletedTodos from "./components/CompletedTodos";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo App</h1>
        <AddTodo />
        <TodoList />
        <CompletedTodos />
      </div>
    </Provider>
  );
};

export default App;
