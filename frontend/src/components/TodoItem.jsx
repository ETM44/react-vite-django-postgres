// TodoItem.jsx
import React from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span>{todo.title}</span>
      <button onClick={() => deleteTodo(todo.id)}>Supprimer</button>
    </div>
  );
};

export default TodoItem;
