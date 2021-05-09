import "./styles.css";
import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: "learn about react",
      isCompleted: false
    },
    {
      text: "Meet friend",
      isCompleted: false
    },
    {
      text: "Build todo app",
      isCompleted: false
    }
  ]);
  const addTodo = (text) => {
    const NewTodos = [...todos, { text }];
    setTodos(NewTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
