import {
  SET_DOB,
  SET_ERROR,
  SET_GENDER,
  SET_LAST_NAME,
  SET_NAME,
} from './actionTypes';

const initialState = {
  firstName: {},
  lastName: {},
  dateOfBirth: {},
  error: '',
  gender: {},
};

export default function personalInfoReducer(state = initialState, action: any) {
  const { type, payload } = action;
  const userId = payload?.userId;
  const data = payload?.data;
  switch (type) {
    case SET_NAME:
      return {
        ...state,
        loading: false,
        firstName: {
          ...state.firstName,
          [userId]: data,
        },
      };
    case SET_LAST_NAME:
      return {
        ...state,
        loading: false,
        lastName: {
          ...state.lastName,
          [userId]: data,
        },
      };
    case SET_DOB:
      return {
        ...state,
        loading: false,
        dateOfBirth: {
          ...state.dateOfBirth,
          [userId]: data,
        },
      };
    case SET_ERROR:
      return { ...state, loading: false, error: payload };
    case SET_GENDER:
      return {
        ...state,
        loading: false,
        gender: {
          ...state.gender,
          [userId]: data,
        },
      };
    default:
      return state;
  }
}
