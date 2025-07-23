import { post } from '../../../Modules/Requests';
import { SEND_OTP, SET_CODE, VERIFY_OTP } from './actionTypes';

interface VerifyOtpRequest {
  otp_code: string;
}

export const setCode = (data: string) => ({
  type: SET_CODE,
  payload: data,
});

export const sendOtp = (token: string) => ({
  type: SEND_OTP,
  payload: post(
    '/api/v1/otp/send-otp/',
    {},
    { Authorization: `Bearer ${token}` },
  ),
});

export const verifyOtp = (data: VerifyOtpRequest, token: string) => ({
  type: VERIFY_OTP,
  payload: post('/api/v1/otp/verify-otp/', data, {
    Authorization: `Bearer ${token}`,
  }),
});
