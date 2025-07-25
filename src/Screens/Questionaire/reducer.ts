import {
  CLEAR_QUESTIONAIRE_ANSWER,
  GET_QUESTIONS_LISTING,
  GET_REGULAR_QUESTIONS,
  QUESTIONAIRE_ANSWER,
} from './actionTypes';

const initialState = {
  Questionaire_Answer: [],
  regularQuestions: [],
};

const RegularQuestionsAnswer = (state = initialState, action: any) => {
  switch (action.type) {
    case QUESTIONAIRE_ANSWER:
      const updatedAnswers = state.Questionaire_Answer.filter(
        (ans: any) => ans?.questionId !== action.payload.questionId,
      );
      console.log('🟢 New answer added:', action.payload);
      return {
        ...state,
        Questionaire_Answer: [...updatedAnswers, action.payload],
      };
    case GET_QUESTIONS_LISTING:
      return {
        ...state,
        regularQuestions: action.payload,
      };
    case CLEAR_QUESTIONAIRE_ANSWER:
      return {
        ...state,
        Questionaire_Answer: [],
      };
    default:
      return state;
  }
};
export default RegularQuestionsAnswer;
