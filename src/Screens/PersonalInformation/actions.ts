import {
  SET_DOB,
  SET_ERROR,
  SET_GENDER,
  SET_LAST_NAME,
  SET_NAME,
} from './actionTypes';

export const setFirstName = (data: string, userId: string) => ({
  type: SET_NAME,
  payload: { data, userId },
});
export const setLastName = (data: string, userId: string) => ({
  type: SET_LAST_NAME,
  payload: { data, userId },
});
export const setDob = (data: string, userId: string) => ({
  type: SET_DOB,
  payload: { data, userId },
});
export const setError = (data: string) => ({
  type: SET_ERROR,
  payload: data,
});
export const setGender = (data: string, userId: string) => ({
  type: SET_GENDER,
  payload: { data, userId },
});
