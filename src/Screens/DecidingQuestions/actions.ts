import { CLEAR_DECIDING_ANSWERS, DECIDING_ANSWER } from "./actionTypes";

export const addAnswer = (answer: any) => ({
  type: DECIDING_ANSWER,
  payload: answer,
});

export const clearDecidingAnswer = () => ({
  type: CLEAR_DECIDING_ANSWERS,
});