import { post } from '../../../Modules/Requests';
import {
  CREATE_TOKEN,
  CREATE_USER,
  SET_EMAIL,
  SET_ERROR,
  SET_PASSWORD,
  SET_TOKEN,
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
export const setToken = (data: string) => ({
  type: SET_TOKEN,
  payload: data,
});

export const createUser = (body: CreateUserRequest) => {
  return {
    type: CREATE_USER,
    payload: post('/users/v1/register_user/register/', body),
  };
};
export const createToken = (body: CreateUserRequest) => {
  console.log(body, 'body');
  return {
    type: CREATE_TOKEN,
    payload: post('/api/token/', body),
  };
};
