import {
  GET_ADDRESS_LISTING,
  GET_USER_DATA,
  GET_USER_DETAILS,
  SET_ADDRESS,
  SET_DOB,
  SET_ERROR,
  SET_GENDER,
  SET_LAST_NAME,
  SET_NAME,
  SET_STATE,
} from './actionTypes';

const initialState = {
  firstName: {},
  lastName: {},
  dateOfBirth: {},
  state: {},
  error: '',
  gender: {},
  address: {},
  addressListing: [],
  userDetail: {},
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
    case SET_ADDRESS:
      return {
        ...state,
        loading: false,
        address: {
          ...state.address,
          [userId]: data,
        },
      };
    case SET_STATE:
      return {
        ...state,
        loading: false,
        state: {
          ...state.state,
          [userId]: data,
        },
      };
    case GET_ADDRESS_LISTING:
      return { ...state, loading: false, addressListing: payload };
    case GET_USER_DATA:
      return { ...state, loading: false, userDetail: payload };

    default:
      return state;
  }
}
