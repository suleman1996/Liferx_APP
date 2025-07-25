import { SET_STATE } from './actionTypes';

export const setState = (state: any) => ({
  type: SET_STATE,
  payload: state,
});

// export const saveDecidingAnswers = (data: any) => ({
//   type: SELECT_STATE,
//   payload: post('/api/v1/save-answers/save-deciding-answers/', data),
// });
