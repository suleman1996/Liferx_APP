import {
  CLEAR_DECIDING_ANSWERS,
  DECIDING_ANSWER,
  GET_DECIDING_QUESTIONS,
  GET_SESSION_ID,
  SELECTED_DECIDING_ANSWERS,
} from './actionTypes';

const initialState = {
  selectedAnswer: [],
  decidingQuestions: [],
  sessionId: '',
};

const decidingQuestionAnswer = (state = initialState, action: any) => {
  switch (action.type) {
    case DECIDING_ANSWER:
        console.log('🔥 DECIDING_ANSWER triggered', action.payload);
      return {
        ...state,
        decidingQuestions: action.payload,
      };
    case SELECTED_DECIDING_ANSWERS: {
      const { serviceId, userId, deciding_questions } = action.payload;
      const existingByUser = state.selectedAnswer?.[userId] || {};
      const existingByService = existingByUser?.[serviceId] || [];
      return {
        ...state,
        selectedAnswer: {
          ...state.selectedAnswer,
          [userId]: {
            ...existingByUser,
            [serviceId]: [
              ...existingByService.filter(
                (ans: any) => ans.deciding_questions !== deciding_questions,
              ),
              action.payload,
            ],
          },
        },
      };
    }
    case GET_SESSION_ID:
      return { ...state, sessionId: action.payload };

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
