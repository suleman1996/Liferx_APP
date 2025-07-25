import { post } from '../../Modules/Requests';
import { SELECT_STATE } from './actionTypes';

export const addState = (state: any) => ({
  type: SELECT_STATE,
  payload: state,
});

export const saveDecidingAnswers = (data: any) => ({
  type: SELECT_STATE,
  payload: post('/api/v1/save-answers/save-deciding-answers/', data),
});
