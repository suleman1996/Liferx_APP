import { post } from '../../../Modules/Requests';
import {
  CREATE_LOGIN,
  GET_TOKEN,
  GET_USER_DATA,
  SET_LOGIN_EMAIL,
  SET_LOGIN_ERROR,
  SET_LOGIN_PASSWORD,
} from './actionTypes';

interface CreateLoginRequest {
  password?: string;
  username?: string;
}

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
export const getToken = (data: string) => ({
  type: GET_TOKEN,
  payload: data,
});
export const getUserData = (data: string) => ({
  type: GET_USER_DATA,
  payload: data,
});
export const createLogin = (data: CreateLoginRequest) => ({
  type: CREATE_LOGIN,
  payload: post('/api/token/', data),
});
