import { instance } from "./instance";
import { ITodo } from "src/typeing/type";
import { Detail } from "src/typeing/type";

export const TodoApi = {
  post: async (todo: ITodo): Promise<ITodo> => {
    const response = await instance.post("/todos", todo);
    return response.data;
  },

  get: async (): Promise<ITodo> => {
    const response = await instance.get("/todos");
    return response.data;
  },

  delete: async (id: ITodo): Promise<ITodo> => {
    const response = await instance.delete(`/todos/${id}`);
    return response.data;
  },

  status: async (payload: Detail): Promise<ITodo> => {
    const response = await instance.patch(`/todos/${payload.id}`, {
      isDone: !payload.isDone,
    });
    return response.data;
  },

  detail: async (id: string): Promise<ITodo> => {
    const response = await instance.get(`/todos/${id}`);
    return response.data;
  },
};
