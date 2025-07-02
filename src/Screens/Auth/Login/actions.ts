import { SET_EMAIL, SET_ERROR, SET_PASSWORD } from './actionTypes';

export const setEmail = (data: string) => ({
  type: SET_EMAIL,
  payload: data,
});
export const setPassword = (data: string) => ({
  type: SET_PASSWORD,
  payload: data,
});
export const setError = (data: string) => ({
  type: SET_ERROR,
  payload: data,
});
