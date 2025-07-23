import { get } from '../../Modules/Requests';
import { GET_SERVICES } from './actionTypes';

export const getServices = () => ({
  type: GET_SERVICES,
  payload: get('/users/v1/active-service/'),
});
