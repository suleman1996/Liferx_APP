import { get, post } from '../../Modules/Requests';
import {
  GET_ADDRESS,
  GET_ADDRESS_LISTING,
  SET_ADDRESS,
  SET_DOB,
  SET_ERROR,
  SET_GENDER,
  SET_LAST_NAME,
  SET_NAME,
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
export const setAddress = (data: string, userId: string) => ({
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
