import { get, post, postMultipart } from '../../Modules/Requests';
import {
  CLEAR_QUESTIONAIRE_ANSWER,
  GET_QUESTIONS_LISTING,
  GET_REGULAR_QUESTIONS,
  QUESTIONAIRE_ANSWER,
  SAVE_MULTI_MEDIA,
  SAVE_REGULAR_QUESTIONS,
} from './actionTypes';

export const addQuestionaireAnswer = (answer: any) => ({
  type: QUESTIONAIRE_ANSWER,
  payload: answer,
});
export const clearQuestionaireAnswer = () => ({
  type: CLEAR_QUESTIONAIRE_ANSWER,
});

export const getRegularQuestions = (id: any) => ({
  type: GET_REGULAR_QUESTIONS,
  payload: get(`/api/v1/services/${id}/questions/`),
});

export const getQuestionsListing = (data: any) => ({
  type: GET_QUESTIONS_LISTING,
  payload: data,
});

export const saveRegularRuestions = (data: object) => ({
  type: SAVE_REGULAR_QUESTIONS,
  payload: post('/api/v1/save-answers/save-regular-answers/', data),
});

export const saveMultiMedia = (formData: FormData) => ({
  type: SAVE_MULTI_MEDIA,
  payload: postMultipart(
    '/api/v1/save-answers/save-regular-answers/',
    formData,
  ),
});
