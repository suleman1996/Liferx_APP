import { post } from '../../Modules/Requests';
import { GET_CLIENT_SECRET_KEY } from './actionTypes';

export const getClientSecretKey = (data: object) => ({
  type: GET_CLIENT_SECRET_KEY,
  payload: post('/users/v1/payment-method/create-setup-intent/', data),
});
