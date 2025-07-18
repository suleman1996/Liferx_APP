import { CLEAR_QUESTIONAIRE_ANSWER, QUESTIONAIRE_ANSWER } from './actionTypes';

const initialState = {
  Questionaire_Answer: [],
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
