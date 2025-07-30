import {
  GET_SUGGESTED_PRODUCTS_LIST,
  SET_SELECTED_MEDICINE,
} from './actionTypes';

const initialState = {
  productId: {},
  suggestedProducts: [],
};

export default function productMedicineReducer(
  state = initialState,
  action: any,
) {
  switch (action.type) {
    case SET_SELECTED_MEDICINE:
      const { productId, userId, serviceId } = action.payload;
      return {
        ...state,
        loading: false,
        productId: {
          ...state.productId,
          [userId]: {
            ...(state.productId?.[userId] || {}),
            [serviceId]: productId,
          },
        },
      };
    case GET_SUGGESTED_PRODUCTS_LIST:
      return {
        ...state,
        loading: true,
        suggestedProducts: action.payload,
      };
    default:
      return state;
  }
}
