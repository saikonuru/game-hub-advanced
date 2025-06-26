export interface Task {
  id: number;
  title: string;
}

export enum TaskActionType {
  ADD,
  DELETE,
  CLEAR,
}

interface AddTask {
  type: TaskActionType.ADD;
  task: Task;
}

interface DeleteTask {
  type: TaskActionType.DELETE;
  taskId: number;
}

interface ClearTasks {
  type: TaskActionType.CLEAR;
}

type TaskAction = AddTask | DeleteTask | ClearTasks;

const tasksReducer = (tasks: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case TaskActionType.ADD:
      tasks = [action.task, ...tasks];
      break;
    case TaskActionType.DELETE:
      tasks = tasks.filter((t) => t.id != action.taskId);
      break;
    case TaskActionType.CLEAR:
      tasks = [];
      break;
  }
  return tasks;
};

export default tasksReducer;
