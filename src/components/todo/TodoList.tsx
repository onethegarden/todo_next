import React from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <div className="listWrapper">
      <ul data-testid="TodoList">
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  );
}
export default TodoList;
