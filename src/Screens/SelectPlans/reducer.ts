import {
  GET_PAYMENT_PLANS_LISTING,
  SELECTED_PAYMENT_PLAN,
} from './actionTypes';

const initialState = {
  plansListing: [],
  selectedPaymentPlan: {},
};

const paymentPlansReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_PAYMENT_PLANS_LISTING:
      return { ...state, plansListing: action.payload };
    case SELECTED_PAYMENT_PLAN:
      const { data, userId, productId } = action.payload;
      return {
        ...state,
        selectedPaymentPlan: {
          [userId]: {
            ...(state.selectedPaymentPlan?.[userId] || {}),
            [productId]: data,
          },
        },
      };
    default:
      return state;
  }
};
export default paymentPlansReducers;
