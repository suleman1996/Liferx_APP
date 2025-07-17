import { SELECT_STATE } from "./actionTypes";

export const addState = (state: any) => ({
  type: SELECT_STATE,
  payload: state,
});
