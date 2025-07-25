import { GET_SERVICE_ID, GET_SERVICES_LISTING } from './actionTypes';

const initialState = {
  services: [],
  loading: false,
  error: null,
  serviceId: null,
};

export default function shopReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_SERVICES_LISTING:
      return { ...state, loading: false, services: action.payload };
    case GET_SERVICE_ID:
      return { ...state, loading: false, serviceId: action.payload };
    default:
      return state;
  }
}
