import {
  SET_DOB,
  SET_ERROR,
  SET_GENDER,
  SET_LAST_NAME,
  SET_NAME,
} from './actionTypes';

const initialState = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  error: '',
  gender: '',
};

export default function personalInfoReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_NAME:
      return { ...state, loading: false, firstName: action.payload };
    case SET_LAST_NAME:
      return { ...state, loading: false, lastName: action.payload };
    case SET_DOB:
      return { ...state, loading: false, dateOfBirth: action.payload };
    case SET_ERROR:
      return { ...state, loading: false, error: action.payload };
    case SET_GENDER:
      return { ...state, loading: false, gender: action.payload };
    default:
      return state;
  }
}
