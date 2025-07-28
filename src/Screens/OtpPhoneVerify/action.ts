import { post } from '../../Modules/Requests';
import {
  SEND_PHONE_OTP,
  SET_ERROR,
  SET_VERIFICATION_CODE,
} from './actionTypes';

interface createOtpPhoneRequest {
  phone?: number;
}

export const setVerificationCode = (code: string, userId: string) => ({
  type: SET_VERIFICATION_CODE,
  payload: { code, userId },
});

export const sendPhoneOtp = (data: createOtpPhoneRequest) => ({
  type: SEND_PHONE_OTP,
  payload: post('/api/v1/otp/send-phone-otp/', data),
});

export const setError = (data: string) => ({
  type: SET_ERROR,
  payload: data,
});
