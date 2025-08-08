import { post } from '../../Modules/Requests';
import {
  CREATE_ORDER,
  GET_CLIENT_SECRET_KEY,
  SAVE_COMPLETE_QUESTION,
  SAVE_CREATE_ORDER_RESPONSE,
} from './actionTypes';

export const getClientSecretKey = (data: object) => ({
  type: GET_CLIENT_SECRET_KEY,
  payload: post('/users/v1/payment-method/create-setup-intent/', data),
});
export const saveCompleteQuestion = (data: object) => ({
  type: SAVE_COMPLETE_QUESTION,
  payload: post('/api/v1/save-answers/complete-questionnaire/', data),
});

export const createOrder = (data: object) => ({
  type: CREATE_ORDER,
  payload: post('/api/v1/order/', data),
});

export const getCreateOrderData = (data: object) => ({
  type: SAVE_CREATE_ORDER_RESPONSE,
  payload: { data },
});
