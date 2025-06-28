import React, { Dispatch } from "react";
import type { Task, TaskAction } from "./tasksReducer";

interface TasksContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TasksContext = React.createContext<TasksContextType>(
  {} as TasksContextType
);

export default TasksContext;
