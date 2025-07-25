import {
  CLEAR_DECIDING_ANSWERS,
  DECIDING_ANSWER,
  GET_DECIDING_QUESTIONS,
  SELECTED_DECIDING_ANSWERS,
} from './actionTypes';

const initialState = {
  selectedAnswer: [],
  decidingQuestions: [],
};

const decidingQuestionAnswer = (state = initialState, action: any) => {
  switch (action.type) {
    case DECIDING_ANSWER:
      return {
        ...state,
        decidingQuestions: action.payload,
      };
    case SELECTED_DECIDING_ANSWERS: {
      const { serviceId, deciding_questions } = action.payload;
      const existing = state.selectedAnswer?.[serviceId] || [];
      return {
        ...state,
        selectedAnswer: {
          ...state.selectedAnswer,
          [serviceId]: [
            ...existing.filter(
              (ans: any) => ans.deciding_questions !== deciding_questions,
            ),
            action.payload,
          ],
        },
      };
    }

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
