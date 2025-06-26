import { useReducer } from "react";
import type { Task } from "./reducer/tasksReducer";
import tasksReducer, { TaskActionType } from "./reducer/tasksReducer";

const TaskList = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
      >
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
