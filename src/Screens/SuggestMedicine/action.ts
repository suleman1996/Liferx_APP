import { SET_SELECTED_MEDICINE } from './actionTypes';

export const setSelectedMedicine = (productId: string, userId: string) => ({
  type: SET_SELECTED_MEDICINE,
  payload: { productId, userId },
});
