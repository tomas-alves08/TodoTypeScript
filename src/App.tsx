import React, { useState } from "react";
import ToDoList from "./Components/TodoList";
import NewTodo from "./Components/NewTodo";
import { TodoModel } from "./todo.models";

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoModel[]>([]);

  const addTodoHandler = (text: string) => {
    const newId = todos.length + 1;
    const newItem = { id: newId.toString(), text };

    setTodos((prevTodos) => [...prevTodos, newItem]);
  };

  const deleteTodoHandler = (id: string) => {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos([...newTodoList]);
  };

  return (
    <div className="App">
      <NewTodo addTodo={addTodoHandler} />
      <ToDoList items={todos} removeTodo={deleteTodoHandler} />
    </div>
  );
};

export default App;
