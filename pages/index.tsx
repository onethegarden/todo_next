import TodoLayout from "../src/components/common/TodoLayout";
import TodoInput from "../src/components/todo/TodoInput";
import TodoList from "../src/components/todo/TodoList";

function Home() {
  return (
    <TodoLayout>
      <h1>next-todo</h1>
      <TodoInput />
      <TodoList />
    </TodoLayout>
  );
}

export default Home;
