import React from "react";

const TodoList = (): JSX.Element => {
  return (
    <div className="listWrapper">
      <ul data-testid="TodoList">
        <li className="done">
          내용
          <button data-testid="toggle" className="toggle" type="button">
            toggle
          </button>
          <button className="delete" type="button">
            ×
          </button>
        </li>
      </ul>
    </div>
  );
};
export default TodoList;
