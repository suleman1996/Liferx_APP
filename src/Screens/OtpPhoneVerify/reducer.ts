import { SET_VERIFICATION_CODE } from './actionTypes';

const initialState = {
  verificationCode: {},
};

export default function verificationCodeReducer(
  state = initialState,
  action: any,
) {
  switch (action.type) {
    case SET_VERIFICATION_CODE:
      const { code, userId } = action.payload;
      return {
        ...state,
        loading: false,
        verificationCode: {
          ...state.verificationCode,
          [userId]: code,
        },
      };
    default:
      return state;
  }
}
