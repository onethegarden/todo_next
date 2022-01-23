import { useEffect, useState } from "react";
import TodoItem from "../src/components/todo/TodoItem";
import todoAPI from "../src/api/todo";
import { Todo } from "../src/model/todo";
import TodoLayout from "../src/components/common/TodoLayout";
import TodoInput from "../src/components/todo/TodoInput";

function DefaultTodo() {
  const [todoList, setTodoList] = useState<Todo[] | null>(null);

  useEffect(() => {
    onLoadTodoList();
  }, []);

  const onLoadTodoList = async () => {
    try {
      const todoResult = await todoAPI.todoList();
      setTodoList(todoResult);
    } catch (e) {}
  };

  return (
    <TodoLayout>
      <h1>default-todo</h1>
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

export default DefaultTodo;
