import { CLEAR_DECIDING_ANSWERS, DECIDING_ANSWER } from './actionTypes';

const initialState = {
  answers: [],
};

const decidingQuestionAnswer = (state = initialState, action: any) => {
  switch (action.type) {
    case DECIDING_ANSWER:
      return {
        ...state,
        answers: [...state.answers, action.payload],
      };
    case CLEAR_DECIDING_ANSWERS:
      return {
        ...state,
        answers: [],
      };
    default:
      return state;
  }
};
export default decidingQuestionAnswer;
