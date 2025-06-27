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

export type TaskAction = AddTask | DeleteTask | ClearTasks;

const tasksReducer = (tasks: Task[], taskAction: TaskAction): Task[] => {
  switch (taskAction.type) {
    case TaskActionType.ADD:
      tasks = [taskAction.task, ...tasks];
      break;
    case TaskActionType.DELETE:
      tasks = tasks.filter((t) => t.id != taskAction.taskId);
      break;
    case TaskActionType.CLEAR:
      tasks = [];
      break;
  }
  return tasks;
};

export default tasksReducer;
