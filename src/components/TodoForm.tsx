import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import { Todo } from "../hooks/useTodos";

const TodoForm = () => {
  const queryClient = useQueryClient();
  const addTodo = useMutation<Todo, Error, Todo>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
        .then((res) => res.data),
    onSuccess: (savedTodo, newTodo) => {
      console.log(savedTodo);
      // APPROACH 1 - Does't work with jsonplaceholder
      //   queryClient.invalidateQueries({
      //     queryKey: ["todos"],
      //   });

      // APPROACH 2 : updating the data in the cache
      queryClient.setQueryData<Todo[]>(["todos"], (currentTodos) => [
        savedTodo,
        ...(currentTodos || []),
      ]);
      if (ref.current) ref.current.value = "";
    },
  });
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}
      <form
        className="row mb-3"
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current && ref.current.value) {
            addTodo.mutate({
              id: 0,
              title: ref.current.value,
              completed: false,
              userId: 1,
            });
          }
        }}
      >
        <div className="col">
          <input
            type="text"
            ref={ref}
            className="form-control"
            placeholder="Enter todo"
          />
        </div>
        <div className="col">
          <button disabled={addTodo.isLoading} className="btn btn-primary">
            {addTodo.isLoading ? "Adding..." : "Add Todo"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
