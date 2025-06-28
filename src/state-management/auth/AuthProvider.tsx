import { ReactNode, useReducer } from "react";
import AuthContext from "./authContext";

export enum AuthActionType {
  LOGIN,
  LOGOUT,
}

interface LoginAction {
  type: AuthActionType.LOGIN;
  user: string;
}

interface LogOutAction {
  type: AuthActionType.LOGOUT;
}

export type AuthAction = LoginAction | LogOutAction;

const authReducer = (state: string, authAction: AuthAction): string => {
  switch (authAction.type) {
    case AuthActionType.LOGIN:
      return authAction.user;
    case AuthActionType.LOGOUT:
      return "";
  }
};

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch: dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
