import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import todoAPI from "../../api/todo";
import { Todo } from "../../model/todo";

interface Props {
  data: Todo[];
}

function ServerSideTodoList({ data: todoList }: Props) {
  return (
    <div className="listWrapper">
      <ul data-testid="TodoList">
        {todoList?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await todoAPI.todoList();
  console.log(data);
  return { props: { data } };
}

export default ServerSideTodoList;
