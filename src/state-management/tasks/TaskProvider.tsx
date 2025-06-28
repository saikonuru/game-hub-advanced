import { useReducer, type ReactNode } from "react";
import TasksContext from "./tasksContext";
import tasksReducer from "./tasksReducer";

interface Props {
  children: ReactNode;
}

const TaskProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch: dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TaskProvider;
