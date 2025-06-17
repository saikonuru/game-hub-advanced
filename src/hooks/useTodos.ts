import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const useTodos = () => {
  const fetchTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);

  return useQuery<Todo[], Error>({
    queryKey: ["todos"], //  queryKey: ["todos", { completed: false }],
    queryFn: fetchTodos,
    staleTime: 10 * 1000, // override
  });
};

export default useTodos;
