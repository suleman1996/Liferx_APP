import { SET_EMAIL, SET_ERROR, SET_PASSWORD } from './actionTypes';

const initialState = {
  loading: false,
  user: null,
  email: '',
  password: '',
  error: '',
};

export default function registerReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_EMAIL:
      return { ...state, loading: false, email: action.payload };
    case SET_PASSWORD:
      return { ...state, loading: false, password: action.payload };
    case SET_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
