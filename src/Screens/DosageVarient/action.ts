import { get } from '../../Modules/Requests';
import {
  GET_DOSAGE_VARIENTS,
  GET_DOSAGE_VARIENTS_LISTING,
  SET_SELECTED_DOSAGE_VARIENT,
} from './actionTypes';

export const getDosageVarients = (id: string, dosage: string) => {
  return {
    type: GET_DOSAGE_VARIENTS,
    payload: get(`/api/v1/products/${id}/dosage-variants/?dosage=${dosage}`),
  };
};

export const getDosageVarientsListing = (data: string) => {
  return {
    type: GET_DOSAGE_VARIENTS_LISTING,
    payload: data,
  };
};

export const setSelectedDosageVarients = (
  data: string,
  userId: string,
  productId: string,
) => {
  return {
    type: SET_SELECTED_DOSAGE_VARIENT,
    payload: { data, userId, productId },
  };
};
