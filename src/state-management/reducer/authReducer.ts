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

type AuthAction = LoginAction | LogOutAction;

const authReducer = (state: string, authAction: AuthAction): string => {
  switch (authAction.type) {
    case AuthActionType.LOGIN:
      return authAction.user;
    case AuthActionType.LOGOUT:
      return "";
  }
};

export default authReducer;
