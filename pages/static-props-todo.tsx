import { useEffect, useState } from "react";
import TodoItem from "../src/components/todo/TodoItem";
import todoAPI from "../src/api/todo";
import { Todo } from "../src/model/todo";
import TodoLayout from "../src/components/common/TodoLayout";
import TodoInput from "../src/components/todo/TodoInput";

interface Props {
  data: Todo[];
}

function StaticPropsTodo({ data: todoList }: Props) {
  return (
    <TodoLayout>
      <h1>Static-props-todo</h1>
      <TodoInput />
      <div className="listWrapper">
        <ul data-testid="TodoList">
          {todoList?.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </TodoLayout>
  );
}

export async function getStaticProps() {
  const data = await todoAPI.todoList();
  return { props: { data } };
}

export default StaticPropsTodo;
