import { SAVE_CREATE_ORDER_RESPONSE } from './actionTypes';

const initialState = {
  createOrderData: '',
};

export default function addPaymentMethodReducer(
  state = initialState,
  action: any,
) {
  switch (action.type) {
    case SAVE_CREATE_ORDER_RESPONSE:
      return { ...state, loading: false, createOrderData: action.payload };
    default:
      return state;
  }
}
