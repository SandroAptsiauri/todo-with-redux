import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../actionCreators";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Todo List</h3>
      <ul>
        {todos.todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <button onClick={() => dispatch(deleteTodo(index))}>Delete</button>
            <button onClick={() => dispatch(toggleTodo(index))}>
              {todo.completed ? "Undo" : "Done"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
