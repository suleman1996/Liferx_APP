import {
  GET_TOKEN,
  SET_LOGIN_EMAIL,
  SET_LOGIN_ERROR,
  SET_LOGIN_PASSWORD,
} from './actionTypes';

const initialState = {
  loading: false,
  user: null,
  email: '',
  password: '',
  error: '',
  token: '',
  prevToken: '',
};

export default function loginReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_LOGIN_EMAIL:
      return { ...state, loading: false, email: action.payload };
    case SET_LOGIN_PASSWORD:
      return { ...state, loading: false, password: action.payload };
    case SET_LOGIN_ERROR:
      return { ...state, loading: false, error: action.payload };
    case GET_TOKEN:
      return {
        ...state,
        loading: false,
        prevToken: state.token || '',
        token: action.payload,
      };
    default:
      return state;
  }
}
