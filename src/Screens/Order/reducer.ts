import { GET_ORDERS_LISTING } from './actionTypes';

const initialState = {
  ordersList: [],
};

export default function ordersReducer(
  state = initialState,
  action: any,
) {
  switch (action.type) {
    case GET_ORDERS_LISTING:
      return {
        ...state,
        loading: false,
        ordersList: action.payload.data,
      };
    default:
      return state;
  }
}
