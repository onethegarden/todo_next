import { Todo } from "../model/todo";

interface Props {
  length: number;
}

function TodoGenerator({ length }: Props) {
  const todoDummy: Todo[] = [];

  for (let i = 1; i < length + 1; i++) {
    todoDummy.push({
      id: i,
      createdAt: String(new Date()),
      updatedAt: "",
      content: `new Todo-${i}`,
      done: false,
    });
  }

  return todoDummy;
}

export default TodoGenerator;
