import {
  CLEAR_QUESTIONAIRE_ANSWER,
  GET_QUESTIONS_LISTING,
  QUESTIONAIRE_ANSWER,
} from './actionTypes';

const initialState = {
  selectedRegularAnswer: [],
  regularQuestions: [],
};

const RegularQuestionsAnswer = (state = initialState, action: any) => {
  switch (action.type) {
    case QUESTIONAIRE_ANSWER: {
      const { serviceId, userId, question } = action.payload;
      const existingByUser = state.selectedRegularAnswer?.[userId] || {};
      const existingByService = existingByUser?.[serviceId] || [];
      return {
        ...state,
        selectedRegularAnswer: {
          ...state.selectedRegularAnswer,
          [userId]: {
            ...existingByUser,
            [serviceId]: [
              ...existingByService.filter(
                (ans: any) => ans.question !== question,
              ),
              action.payload,
            ],
          },
        },
      };
    }

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
