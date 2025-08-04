import { get, post, put } from '../../Modules/Requests';
import {
  ADD_USER_DETAILS,
  GET_ADDRESS,
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

interface streetAddress {
  query: string;
  include_only_states: string;
}

export const setFirstName = (data: string, userId: string) => ({
  type: SET_NAME,
  payload: { data, userId },
});
export const setLastName = (data: string, userId: string) => ({
  type: SET_LAST_NAME,
  payload: { data, userId },
});
export const setState = (data: string, userId: string) => ({
  type: SET_STATE,
  payload: { data, userId },
});
export const setDob = (data: string, userId: string) => ({
  type: SET_DOB,
  payload: { data, userId },
});
export const setError = (data: string) => ({
  type: SET_ERROR,
  payload: data,
});
export const setGender = (data: string, userId: string) => ({
  type: SET_GENDER,
  payload: { data, userId },
});
export const setAddress = (data: object, userId: string) => ({
  type: SET_ADDRESS,
  payload: { data, userId },
});

export const getAddress = (data: streetAddress) => ({
  type: GET_ADDRESS,
  payload: get(
    `/api/v1/shipping_address/autocomplete/?query=${data?.query}&include_only_states=${data?.include_only_states}`,
  ),
});
export const getAddressList = (data: any) => ({
  type: GET_ADDRESS_LISTING,
  payload: data,
});

export const addUserDetails = (data: any) => ({
  type: ADD_USER_DETAILS,
  payload: put('/users/v1/users_detail/', data),
});
export const getUserDetails = () => ({
  type: GET_USER_DETAILS,
  payload: get('/users/v1/users_detail/'),
});
export const getUserData = (data: object) => ({
  type: GET_USER_DATA,
  payload: { data },
});
