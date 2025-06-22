import APIClient from "./APIClient";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default new APIClient<Todo>("/todos");
