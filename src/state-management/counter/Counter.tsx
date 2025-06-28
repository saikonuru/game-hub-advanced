import { useReducer } from "react";
import { ActionType, counterReducer } from "./counterReducer";

const Counter = () => {
  const [value, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      Counter ({value})
      <button
        onClick={() => dispatch({ type: ActionType.INCREMENT })}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: ActionType.RESET })}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
