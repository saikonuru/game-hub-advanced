import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { CACHE_KEY_TODOS } from "./constants";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const apiClient = new APIClient<Todo>("/todos");
const useTodos = () => {
  return useQuery<Todo[], Error>(
    CACHE_KEY_TODOS, //  queryKey: ["todos", { completed: false }],
    apiClient.getAll,
    {
      staleTime: 10 * 1000, // override
    }
  );
};

export default useTodos;
