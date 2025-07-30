import { SET_STATE } from './actionTypes';

export const setState = (data: any, userId: string) => ({
  type: SET_STATE,
  payload: { data, userId },
});

// export const saveDecidingAnswers = (data: any) => ({
//   type: SELECT_STATE,
//   payload: post('/api/v1/save-answers/save-deciding-answers/', data),
// });
