import { GET_ORDER_TRACKING_DATA } from './actionTypes';

const initialState = {
  orderTrackingData: {},
};

export default function orderTrackingReducer(
  state = initialState,
  action: any,
) {
  switch (action.type) {
    case GET_ORDER_TRACKING_DATA:
      return {
        ...state,
        loading: false,
        orderTrackingData: action.payload,
      };
    default:
      return state;
  }
}
