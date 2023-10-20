import React from "react";
import { TodoModel } from "../todo.models";
import "./TodoList.css";

interface TodoListProps {
  items: TodoModel[];
  removeTodo: (id: string) => void;
}

const ToDoList: React.FC<TodoListProps> = ({ items, removeTodo }) => {
  console.log(items);
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={removeTodo.bind(null, todo.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
