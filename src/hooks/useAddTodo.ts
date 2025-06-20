import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { CACHE_KEY_TODOS } from "./constants";
import { Todo } from "./useTodos";

interface AddTodoContext {
  previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();
  const apiClient = new APIClient<Todo>("/todos");

  return useMutation<Todo, Error, Todo, AddTodoContext>({
    mutationFn: apiClient.post,

    onMutate: (newTodo: Todo) => {
      const previousTodos =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
        newTodo,
        ...todos,
      ]);

      onAdd();
      //if (ref.current) ref.current.value = "";
      return { previousTodos };
    },
    onSuccess: (savedTodo, newTodo) => {
      // APPROACH 1 - Does't work with jsonplaceholder
      //   queryClient.invalidateQueries({
      //     queryKey: CACHE_KEY_TODOS,
      //   });

      // APPROACH 2 : updating the data in the cache
      // queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (currentTodos) => [
      //   savedTodo,
      //   ...(currentTodos || []),
      // ]);
      // if (ref.current) ref.current.value = "";

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },
    onError: (error, newTodo, context) => {
      if (!context) return;

      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
    },
  });
};

export default useAddTodo;
