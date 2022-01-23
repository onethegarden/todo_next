import React from "react";
import { BsPencil } from "react-icons/bs";
import { Todo } from "../../model/todo";

function TodoItem({ todo }: { todo: Todo }) {
  return (
    <li className="done">
      <span>{todo.content}</span>
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
