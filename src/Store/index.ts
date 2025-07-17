import { createStore, combineReducers } from 'redux';
import loginReducer from '../Screens/Auth/Login/reducer';
import twoStepVerificationReducer from '../Screens/Auth/2StepVerification/reducer';
import decidingQuestionAnswer from '../Screens/DecidingQuestions/reducer';
import selectYourState from '../Screens/SelectState/reducer';
import RegularQuestionsAnswer from '../Screens/Questionaire/reducer';

const rootReducer = combineReducers({
  login: loginReducer,
  twoStepVerification: twoStepVerificationReducer,
  decidingQuestionAnswer: decidingQuestionAnswer,
  selectYourState: selectYourState,
  RegularQuestionsAnswer:RegularQuestionsAnswer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
