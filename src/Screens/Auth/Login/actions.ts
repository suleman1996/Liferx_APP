import {
  SET_LOGIN_EMAIL,
  SET_LOGIN_ERROR,
  SET_LOGIN_PASSWORD,
} from './actionTypes';

export const setEmail = (data: string) => ({
  type: SET_LOGIN_EMAIL,
  payload: data,
});
export const setPassword = (data: string) => ({
  type: SET_LOGIN_PASSWORD,
  payload: data,
});
export const setError = (data: string) => ({
  type: SET_LOGIN_ERROR,
  payload: data,
});
