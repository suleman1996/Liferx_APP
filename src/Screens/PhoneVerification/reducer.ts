import { SET_ERROR, SET_PHONE_NUMBER } from './actionTypes';

const initialState = {
  phoneNumber: '',
  error: '',
};

export default function phoneVerifyReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_PHONE_NUMBER:
      return { ...state, loading: false, phoneNumber: action.payload };
    case SET_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
