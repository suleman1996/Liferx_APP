import { get, post } from '../../Modules/Requests';
import {
  CLEAR_DECIDING_ANSWERS,
  DECIDING_ANSWER,
  GET_DECIDING_QUESTIONS,
  GET_SESSION_ID,
  SAVE_DECIDING_ANSWERS,
  SELECTED_DECIDING_ANSWERS,
  SET_START_SESSION,
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
  payload: get(`/api/v1/services/${id}/deciding-questions/`,),
});

export const saveDecidingAnswers = (data: object) => ({
  type: SAVE_DECIDING_ANSWERS,
  payload: post('/api/v1/save-answers/save-deciding-answers/', data),
});

export const getSessionId = (sessionId: any) => ({
  type: GET_SESSION_ID,
  payload: sessionId,
});

export const setStartSession = (id: object) => ({
  type: SET_START_SESSION,
  payload: post('/api/v1/save-answers/start-session/', id),
});
