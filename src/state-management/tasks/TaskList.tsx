import { useContext } from "react";
import useAuthStore from "../auth/store";
import TasksContext from "./tasksContext";
import { TaskActionType, type Task } from "./tasksReducer";

const TaskList = () => {
  const useTasks = () => useContext(TasksContext);
  const { tasks, dispatch } = useTasks();
  const { user } = useAuthStore();

  return (
    <>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
      >
        <p>User : {user}</p>
        <br />
        <button
          onClick={() =>
            dispatch({
              type: TaskActionType.ADD,
              task: { id: Date.now(), title: "Task " + Date.now() },
            })
          }
          className="btn btn-primary"
        >
          Add Task
        </button>
        <div style={{ width: "12px" }} />
        <button
          onClick={() =>
            dispatch({
              type: TaskActionType.CLEAR,
            })
          }
          className="btn btn-primary"
        >
          Clear Tasks
        </button>
      </div>

      <ul className="list-group">
        {tasks.map((task: Task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() =>
                dispatch({ type: TaskActionType.DELETE, taskId: task.id })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
