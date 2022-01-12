import React, { useState } from "react";

export interface TodoProps {
  onInsert: (value: string) => void;
}

function TodoInput() {
  const [todo, setTodo] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  return (
    <form onSubmit={() => {}}>
      <div className="inputWrapper">
        <input
          className="todoInput"
          type="text"
          placeholder="Add a task"
          onChange={onChange}
          value={todo}
        />
        <button type="submit">+</button>
      </div>
    </form>
  );
}
export default TodoInput;
