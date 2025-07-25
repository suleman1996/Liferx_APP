import { SET_DOB, SET_ERROR, SET_GENDER, SET_LAST_NAME, SET_NAME } from './actionTypes';

export const setFirstName = (data: string) => ({
  type: SET_NAME,
  payload: data,
});
export const setLastName = (data: string) => ({
  type: SET_LAST_NAME,
  payload: data,
});
export const setDob = (data: string) => ({
  type: SET_DOB,
  payload: data,
});
export const setError = (data: string) => ({
  type: SET_ERROR,
  payload: data,
});
export const setGender = (data: string) => ({
  type: SET_GENDER,
  payload: data,
});