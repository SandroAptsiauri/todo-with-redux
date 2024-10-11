import React from "react";
import { useSelector } from "react-redux";

const CompletedTodos = () => {
  const todos = useSelector((state) => state.todos);

  const completedTodos = todos.todos.filter((todo) => todo.completed);

  return (
    <div>
      <h3>Completed Todos</h3>
      <ul>
        {completedTodos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedTodos;
