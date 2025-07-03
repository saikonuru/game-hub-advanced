// this is not required kept for reference purpose only

enum ActionType {
  INCREMENT,
  RESET,
}

export type Action = { type: ActionType };

const counterReducer = (state: number, action: Action): number => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return state + 1;
    case ActionType.RESET:
      return 0;
    default:
      return state;
  }
};

export { ActionType, counterReducer };
