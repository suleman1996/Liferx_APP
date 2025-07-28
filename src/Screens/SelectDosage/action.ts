import { get } from '../../Modules/Requests';
import {
  GET_DOSAGES,
  GET_DOSAGES_LISTING,
  SET_SELECTED_DOSAGE,
} from './actionTypes';

export const getDosageListing = (data: string) => ({
  type: GET_DOSAGES_LISTING,
  payload: data,
});

export const setSelectedDosage = (
  dosage: string,
  userId: string,
  productId: string,
) => ({
  type: SET_SELECTED_DOSAGE,
  payload: { dosage, userId, productId },
});

export const getDosage = (id: string) => ({
  type: GET_DOSAGES,
  payload: get(`/api/v1/products/${id}/dosages/`),
});
