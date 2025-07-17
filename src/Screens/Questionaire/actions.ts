import { QUESTIONAIRE_ANSWER } from './actionTypes';

export const addQuestionaireAnswer = (answer: any) => ({
  type: QUESTIONAIRE_ANSWER,
  payload: answer,
});
