import { GET_SERVICES } from './actionTypes';

const initialState = {
  services: [],
  loading: false,
  error: null,
};

export default function shopReducer(state = initialState, action: any) {
  switch (action.type) {
    case `${GET_SERVICES}_FULFILLED`:
      return { ...state, loading: false, services: action.payload.data };
    default:
      return state;
  }
}
