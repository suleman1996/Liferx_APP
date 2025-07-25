import { SET_STATE } from './actionTypes';

const initialState = {
  selectedState: '',
};

const selectYourState = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_STATE:
      return { ...state, selectedState: action.payload };
    default:
      return state;
  }
};
export default selectYourState;
