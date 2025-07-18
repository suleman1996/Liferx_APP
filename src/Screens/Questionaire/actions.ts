import { CLEAR_QUESTIONAIRE_ANSWER, QUESTIONAIRE_ANSWER } from './actionTypes';

export const addQuestionaireAnswer = (answer: any) => ({
  type: QUESTIONAIRE_ANSWER,
  payload: answer,
});
export const clearQuestionaireAnswer = () => ({
  type: CLEAR_QUESTIONAIRE_ANSWER,
});
