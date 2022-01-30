import axios from "axios";
import { Todo } from "../model/todo";
import TodoGenerator from "../utils/TodoGenerator";

const todoAPI = {
  todoList: async (): Promise<Todo[]> => {
    //return (await axios.get<Todo[]>(`/api/todo`)).data;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(TodoGenerator({ length: 500 }));
      }, 500);
    });
  },
};

export default todoAPI;
