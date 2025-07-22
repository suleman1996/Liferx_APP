import { post } from '../../../Modules/Requests';
import { SEND_OTP, SET_CODE } from './actionTypes';

export const setCode = (data: string) => ({
  type: SET_CODE,
  payload: data,
});

export const sendOtp = () => ({
  type: SEND_OTP,
  payload: post('/api/v1/otp/send-otp/'),
});
