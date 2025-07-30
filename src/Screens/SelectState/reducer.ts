import { SET_STATE } from './actionTypes';

const initialState = {
  selectedState: {},
};

const selectYourState = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_STATE:
      const { data, userId } = action.payload;
      console.log('SET_STATE ->', action.payload, 'Existing:', state.selectedState);
      return {
        ...state,
        selectedState: {
          ...(state.selectedState || {}),
          [userId]: data,
        },
      };
    default:
      return state;
  }
};
export default selectYourState;
