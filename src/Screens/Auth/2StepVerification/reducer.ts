import { SET_CODE } from './actionTypes';

const initialState = {
  loading: false,
  code: '',
};

export default function twoStepVerificationReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_CODE:
      return { ...state, loading: false, code: action.payload };
    default:
      return state;
  }
}
