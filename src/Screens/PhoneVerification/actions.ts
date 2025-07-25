import { SET_ERROR, SET_PHONE_NUMBER } from './actionTypes';

export const setPhoneNumber = (data: string) => ({
  type: SET_PHONE_NUMBER,
  payload: data,
});
export const setError = (data: string) => ({
  type: SET_ERROR,
  payload: data,
});
