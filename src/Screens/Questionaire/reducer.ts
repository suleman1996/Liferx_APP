import { QUESTIONAIRE_ANSWER } from './actionTypes';

const initialState = {
  Questionaire_Answer: [],
};

const RegularQuestionsAnswer = (state = initialState, action: any) => {
  switch (action.type) {
    case QUESTIONAIRE_ANSWER:
      const updatedAnswers = state.Questionaire_Answer.filter(
        ans => ans?.questionId !== action.payload.questionId,
      );
      console.log('🟢 New answer added:', action.payload);
      return {
        ...state,
        Questionaire_Answer: [...updatedAnswers, action.payload],
      };
    default:
      return state;
  }
};
export default RegularQuestionsAnswer;
