import React, { useRef } from "react";
import "./NewTodo.css";

interface NewTodoProps {
  addTodo(todoText: string): void;
}

const NewTodo: React.FC<NewTodoProps> = ({ addTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = textInputRef.current!.value;

    // items.push(newItem);
    addTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
