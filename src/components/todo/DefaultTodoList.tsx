import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import todoAPI from "../../api/todo";
import { Todo } from "../../model/todo";

function TodoList() {
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
    <div className="listWrapper">
      <ul data-testid="TodoList">
        {todoList?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
