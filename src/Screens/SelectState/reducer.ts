import { SET_STATE } from './actionTypes';

const initialState = {
  selectedState: {},
};

const selectYourState = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_STATE:
      const { data, userId } = action.payload;
      return {
        ...state,
        selectedState: {
          [userId]: data,
        },
      };
    default:
      return state;
  }
};
export default selectYourState;
