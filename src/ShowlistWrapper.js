import React, { useState } from "react";
import ShowList from "./ShowList";
import EditTodoForm from "./EditTodoForm";
import Todo from "./todo";
import { v4 as uuidv4 } from "uuid";
uuidv4();

function ShowlistWrapper() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, isEditing: false, completed: false },
    ]);
    console.log(todos);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };


  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };


  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <ShowList addTodo={addTodo} />

      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm 
          key={todo.id}
          task={todo}
          id={todo.id} 
          editTodo={editTask} />
        ) : (
          <Todo
            task={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
}

export default ShowlistWrapper;
