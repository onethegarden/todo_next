import axios from "axios";
import { Todo } from "../model/todo";

export const BASE_URI = "http://localhost:4000";

const todoAPI = {
  todoList: async (): Promise<Todo[]> => {
    return (await axios.get<Todo[]>(`${BASE_URI}/todo`)).data;
  },
  todoInsert: async (todo: { content: string }): Promise<Todo> => {
    return (await axios.post<Todo>(`${BASE_URI}/todo`, todo)).data;
  },
  todoToggle: async (todoId: number): Promise<Todo> => {
    return (await axios.patch<Todo>(`${BASE_URI}/todo/${todoId}`)).data;
  },
  todoPut: async (todo: Todo): Promise<Todo> => {
    return (await axios.put<Todo>(`${BASE_URI}/todo/${todo.id}`, todo)).data;
  },
  todoDelete: async (todoId: number): Promise<Todo> => {
    return (await axios.delete<Todo>(`${BASE_URI}/todo/${todoId}`)).data;
  },
};

export default todoAPI;
