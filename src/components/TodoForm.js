import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    // para prevenir el envio accidental
    e.preventDefault();
    if (value) {
      // borrar despues del submit
      addTodo(value);
      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Qué vas a comprar?"
      />
      <button type="submit" className="todo-btn">
        Añadir
      </button>
    </form>
  );
};
