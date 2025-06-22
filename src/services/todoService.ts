import ToDoAPIClient from "./ToDoAPIClient";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default new ToDoAPIClient<Todo>("/todos");
