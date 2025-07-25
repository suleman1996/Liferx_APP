import { get } from '../../Modules/Requests';
import {
  CLEAR_DECIDING_ANSWERS,
  DECIDING_ANSWER,
  GET_DECIDING_QUESTIONS,
  SELECTED_DECIDING_ANSWERS,
} from './actionTypes';

export const addDecidingAnswer = (answer: any) => ({
  type: DECIDING_ANSWER,
  payload: answer,
});

export const selectedDecidingAnswer = (answer: any) => ({
  type: SELECTED_DECIDING_ANSWERS,
  payload: answer,
});

export const clearDecidingAnswer = () => ({
  type: CLEAR_DECIDING_ANSWERS,
});

export const getDecidingQuestion = (id: any) => ({
  type: GET_DECIDING_QUESTIONS,
  payload: get(`/api/v1/services/${id}/deciding-questions/`),
});
