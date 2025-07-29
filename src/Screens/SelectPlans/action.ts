import { get } from '../../Modules/Requests';
import {
  GET_PAYMENT_PLANS,
  GET_PAYMENT_PLANS_LISTING,
  SELECTED_PAYMENT_PLAN,
} from './actionTypes';

export const getPaymentPlans = (
  id: string,
  dosage: string,
  quantity: string,
) => ({
  type: GET_PAYMENT_PLANS,
  payload: get(
    `/api/v1/products/${id}/dosage-variants/?dosage=${dosage}&quantity=${quantity}`,
  ),
});

export const getPaymentPlansListing = (data: object) => ({
  type: GET_PAYMENT_PLANS_LISTING,
  payload: data,
});

export const setSelectedPaymentPlan = (
  data: string,
  userId: string,
  productId: string,
) => ({
  type: SELECTED_PAYMENT_PLAN,
  payload: { data, userId, productId },
});
