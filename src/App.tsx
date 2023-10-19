import React, { useState } from "react";
import ToDoList from "./Components/TodoList";
import NewTodo from "./Components/NewTodo";

const App: React.FC = () => {
  const [todos, setTodos] = useState([
    { id: "1", text: "Finish the course" },
    { id: "2", text: "Do assugnments" },
  ]);

  const addTodoHandler = (text: string) => {
    const newId = todos.length + 1;
    const newItem = { id: newId.toString(), text };

    setTodos([...todos, newItem]);
  };

  return (
    <div className="App">
      <NewTodo addTodo={addTodoHandler} />
      <ToDoList items={todos} />
    </div>
  );
};

export default App;
