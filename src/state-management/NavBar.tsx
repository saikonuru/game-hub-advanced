import { useContext } from "react";
import LoginStatus from "./auth/LoginStatus";
import useCounterStore from "./counter/stote";
import TasksContext from "./tasks/tasksContext";

const NavBar = () => {
  const { tasks } = useContext(TasksContext);
  const counter = useCounterStore((s) => s.counter);
  console.log("Render NavBar");
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">
        {counter}
        {/* {tasks.length} */}
      </span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
