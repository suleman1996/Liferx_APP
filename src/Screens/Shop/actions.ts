import { get } from '../../Modules/Requests';
import {
  GET_SERVICE_ID,
  GET_SERVICES,
  GET_SERVICES_LISTING,
} from './actionTypes';

export const getServiceListing = (data: any) => ({
  type: GET_SERVICES_LISTING,
  payload: data,
});

export const getServiceId = (data: any) => ({
  type: GET_SERVICE_ID,
  payload: data,
});

export const getServices = () => ({
  type: GET_SERVICES,
  payload: get('/users/v1/active-service/'),
});
