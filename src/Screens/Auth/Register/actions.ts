import { post } from '../../../Modules/Requests';
import {
  CREATE_TOKEN,
  CREATE_USER,
  GET_USER_DATA,
  SET_EMAIL,
  SET_ERROR,
  SET_PASSWORD,
} from './actionTypes';

interface CreateUserRequest {
  email?: string;
  password?: string;
  username?: string;
}

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
export const createUser = (body: CreateUserRequest) => {
  return {
    type: CREATE_USER,
    payload: post('/users/v1/register_user/register/', body),
  };
};
export const createToken = (body: CreateUserRequest) => {
  return {
    type: CREATE_TOKEN,
    payload: post('/api/token/', body),
  };
};
export const getUserData = (data: string) => ({
  type: GET_USER_DATA,
  payload: data,
});
