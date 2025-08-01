import { SET_ON_BOARDING } from './actionTypes';

export const setOnBoarding = (data: boolean) => ({
  type: SET_ON_BOARDING,
  payload: data,
});
