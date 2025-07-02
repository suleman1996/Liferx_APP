import { SET_CODE } from './actionTypes';

export const setCode = (data: string) => ({
  type: SET_CODE,
  payload: data,
});
