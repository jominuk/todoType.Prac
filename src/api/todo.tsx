import { instance } from "./instance";
import { ITodo, ITodoStatus, ITodoEdit, IComments } from "src/typeing/type";

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

  status: async (payload: ITodoStatus): Promise<ITodo> => {
    const response = await instance.patch(`/todos/${payload.id}`, {
      isDone: !payload.isDone,
    });
    return response.data;
  },

  detail: async (id: string | number): Promise<ITodo> => {
    const response = await instance.get(`/todos/${id}`);
    return response.data;
  },

  edit: async (payload: ITodoEdit): Promise<ITodoEdit> => {
    const response = await instance.patch(`/todos/${payload.id}`, {
      title: payload.title,
      body: payload.body,
    });
    return response.data;
  },
};

export const CommentApi = {
  post: async (payload: any): Promise<void> => {
    const res = await instance.post(
      `/todo/${payload.postId}/comments`,
      payload
    );
    return res.data;
  },

  get: async (postId: ITodo): Promise<ITodo> => {
    console.log(postId);
    const res = await instance.get(`/todos/${postId}/comments`);
    return res.data;
  },

  delete: async (commentId: IComments): Promise<void> => {
    const res = await instance.delete(`/comments/${commentId}`);
    return res.data;
  },
};
