import { SET_SELECTED_MEDICINE } from './actionTypes';

const initialState = {
  productId: {},
};

export default function productMedicineReducer(
  state = initialState,
  action: any,
) {
  switch (action.type) {
    case SET_SELECTED_MEDICINE:
      const { productId, userId } = action.payload;
      return {
        ...state,
        loading: false,
        productId: {
          ...state.productId,
          [userId]: productId,
        },
      };
    default:
      return state;
  }
}
