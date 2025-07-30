import { post } from '../../Modules/Requests';
import {
  GET_SUGGESTED_PRODUCTS,
  GET_SUGGESTED_PRODUCTS_LIST,
  SET_SELECTED_MEDICINE,
} from './actionTypes';

export const setSelectedMedicine = (
  productId: string,
  userId: string,
  serviceId: string,
) => ({
  type: SET_SELECTED_MEDICINE,
  payload: { productId, userId, serviceId },
});

export const getSuggestedProducts = (id: object) => ({
  type: GET_SUGGESTED_PRODUCTS,
  payload: post('/api/v1/save-answers/suggested-products/', id),
});

export const getSuggestedProductsList = (data: object,userId:string, serviceId :string) => ({
  type: GET_SUGGESTED_PRODUCTS_LIST,
  payload: { data,userId,serviceId },
});
