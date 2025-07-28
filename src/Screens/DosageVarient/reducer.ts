import {
  GET_DOSAGE_VARIENTS_LISTING,
  SET_SELECTED_DOSAGE_VARIENT,
} from './actionTypes';

const initialState = {
  doasgeVarientList: [],
  selectDosageVarient: {},
};

const dosageVarientReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_DOSAGE_VARIENTS_LISTING:
      return { ...state, doasgeVarientList: action.payload };
    case SET_SELECTED_DOSAGE_VARIENT:
      const { data, userId, productId } = action.payload;
      return {
        ...state,
        selectDosageVarient: {
          ...state.selectDosageVarient,
          [userId]: {
            ...(state.selectDosageVarient?.[userId] || {}),
            [productId]: data,
          },
        },
      };
    default:
      return state;
  }
};
export default dosageVarientReducers;
