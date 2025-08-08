import { SET_ON_BOARDING } from './actionTypes';

const initialState = {
  isOnBoarding: null,
};

export default function onBoardingReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_ON_BOARDING:
      return { ...state, loading: false, isOnBoarding: action.payload };
    default:
      return state;
  }
}
