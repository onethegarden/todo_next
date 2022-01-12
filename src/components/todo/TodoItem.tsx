import React from "react";
import { BsPencil } from "react-icons/bs";

function TodoItem() {
  return (
    <li className="done">
      <span>내용</span>
      <button data-testid="edit" className="editable" type="button">
        <BsPencil />
      </button>
      <button className="delete" type="button">
        ×
      </button>
    </li>
  );
}
export default TodoItem;
