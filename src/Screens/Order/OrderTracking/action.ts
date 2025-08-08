import { post } from '../../../Modules/Requests';
import { GET_ORDER_TRACKING, GET_ORDER_TRACKING_DATA } from './actionTypes';

export const getOrderTracking = (id: number) => ({
  type: GET_ORDER_TRACKING,
  payload: post(`/api/v1/order/${id}/order-tracking/`),
});

export const getOrderTrackingData = (data: object) => ({
  type: GET_ORDER_TRACKING_DATA,
  payload: { data },
});
