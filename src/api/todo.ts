import axios from "axios";
import { Todo } from "../model/todo";

export const BASE_URI = "http://localhost:3000";

const todoAPI = {
  todoList: async (): Promise<Todo[]> => {
    return (await axios.get<Todo[]>(`${BASE_URI}/api/todo`)).data;
  },
};

export default todoAPI;
