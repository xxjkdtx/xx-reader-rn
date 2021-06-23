export interface showSnackAction {
  message: string;
  type: string;
}

export interface hideSnackAction {
  type: string;
}

export type snackAction = showSnackAction | hideSnackAction;
