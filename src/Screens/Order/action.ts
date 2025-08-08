import { get } from '../../Modules/Requests';
import { GET_ORDERS, GET_ORDERS_LISTING } from './actionTypes';

export const getOrderListing = () => ({
  type: GET_ORDERS,
  payload: get(`/api/v1/subscription/`),
});

export const getOrdersList = (data: object) => ({
  type: GET_ORDERS_LISTING,
  payload: { data },
});
