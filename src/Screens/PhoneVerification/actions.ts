import { post, put } from '../../Modules/Requests';
import {
  ADD_USER_DETAILS,
  SEND_PHONE_NUMBER,
  SET_ERROR,
  SET_PHONE_NUMBER,
} from './actionTypes';

export const setPhoneNumber = (number: string, userId: string) => ({
  type: SET_PHONE_NUMBER,
  payload: { number, userId },
});
export const setError = (data: string) => ({
  type: SET_ERROR,
  payload: data,
});

export const sendPhoneNumber = (number: string) => ({
  type: SEND_PHONE_NUMBER,
  payload: post('/api/v1/otp/send-phone-otp/', number),
});

export const addUserDetails = (data: object) => ({
  type: ADD_USER_DETAILS,
  payload: put('/users/v1/users_detail/', data),
});
