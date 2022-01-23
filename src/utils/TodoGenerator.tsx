import { Todo } from "../model/todo";

function TodoGenerator() {
  const todoDummy: Todo[] = [];

  for (let i = 1; i < 501; i++) {
    todoDummy.push({
      id: i,
      createdAt: String(new Date()),
      updatedAt: "",
      content: `new Todo-${i}`,
      done: false,
    });
  }

  return (
    <div>
      <textarea>{JSON.stringify(todoDummy)}</textarea>
    </div>
  );
}
export default TodoGenerator;
