import { useQuery } from "@tanstack/react-query";
import todoService, { Todo } from "../services/todoService";
import { CACHE_KEY_TODOS } from "./constants";

const useTodos = () => {
  return useQuery<Todo[], Error>(
    CACHE_KEY_TODOS, //  queryKey: ["todos", { completed: false }],
    todoService.getAll,
    {
      staleTime: 10 * 1000, // override
    }
  );
};

export default useTodos;
