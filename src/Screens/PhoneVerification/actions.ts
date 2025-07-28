import { SET_ERROR, SET_PHONE_NUMBER } from './actionTypes';

export const setPhoneNumber = (number: string, userId: string) => ({
  type: SET_PHONE_NUMBER,
  payload: { number, userId },
});
export const setError = (data: string) => ({
  type: SET_ERROR,
  payload: data,
});
