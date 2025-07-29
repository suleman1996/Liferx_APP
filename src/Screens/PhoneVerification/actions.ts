import { post } from '../../Modules/Requests';
import { SEND_PHONE_NUMBER, SET_ERROR, SET_PHONE_NUMBER } from './actionTypes';

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
