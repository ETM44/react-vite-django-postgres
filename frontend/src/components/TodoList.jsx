// TodoList.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/todos/")
      .then((response) => setTodos(response.data))
      .catch((error) => console.log(error));
  }, []);

  const addTodo = () => {
    axios
      .post("http://localhost:8000/api/todos/", { title: newTodo })
      .then((response) => setTodos([...todos, response.data]))
      .catch((error) => console.log(error));
    setNewTodo("");
  };

  const toggleComplete = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    axios
      .patch(`http://localhost:8000/api/todos/${id}/`, {
        completed: !todo.completed,
      })
      .then((response) => {
        const updatedTodos = todos.map((todo) =>
          todo.id === id ? response.data : todo
        );
        setTodos(updatedTodos);
      })
      .catch((error) => console.log(error));
  };

  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:8000/api/todos/${id}/`)
      .then(() => setTodos(todos.filter((todo) => todo.id !== id)))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Ajouter</button>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
