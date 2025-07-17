import { SELECT_STATE } from './actionTypes';

const initialState = {
  states: '',
};

const selectYourState = (state = initialState, action: any) => {
  switch (action.type) {
    case SELECT_STATE:
      return {
        ...state,
        states: action.payload,
      };
    default:
      return state;
  }
};
export default selectYourState;
