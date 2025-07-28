import { GET_DOSAGES_LISTING, SET_SELECTED_DOSAGE } from './actionTypes';

interface SelectDosageState {
  [userId: string]: {
    [productId: string]: string;
  };
}

interface DosageState {
  doasgeList: any[];
  selectDosage: SelectDosageState;
}

const initialState: DosageState = {
  doasgeList: [],
  selectDosage: {},
};

const dosageReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_DOSAGES_LISTING:
      return { ...state, doasgeList: action.payload };
    case SET_SELECTED_DOSAGE:
      const { dosage, userId, productId } = action.payload;
      return {
        ...state,
        selectDosage: {
          ...state.selectDosage,
          [userId]: {
            ...(state.selectDosage?.[userId] || {}),
            [productId]: dosage,
          },
        },
      };
    default:
      return state;
  }
};
export default dosageReducers;
