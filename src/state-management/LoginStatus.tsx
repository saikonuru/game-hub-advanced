import useAuth from "../hooks/useAuth";
import { AuthActionType } from "./reducer/authReducer";

const LoginStatus = () => {
  const { user, dispatch } = useAuth();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">Hello {user} !</span>
          <a onClick={() => dispatch({ type: AuthActionType.LOGOUT })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatch({ user: "sairam", type: AuthActionType.LOGIN })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
