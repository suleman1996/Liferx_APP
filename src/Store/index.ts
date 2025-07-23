import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import loginReducer from '../Screens/Auth/Login/reducer';
import twoStepVerificationReducer from '../Screens/Auth/2StepVerification/reducer';
import decidingQuestionAnswer from '../Screens/DecidingQuestions/reducer';
import selectYourState from '../Screens/SelectState/reducer';
import RegularQuestionsAnswer from '../Screens/Questionaire/reducer';
import registerReducer from '../Screens/Auth/Register/reducer';
import shopReducer from '../Screens/Shop/reducer';

const rootReducer = combineReducers({
  login: loginReducer,
  registerReducer: registerReducer,
  twoStepVerification: twoStepVerificationReducer,
  decidingQuestionAnswer: decidingQuestionAnswer,
  selectYourState: selectYourState,
  RegularQuestionsAnswer: RegularQuestionsAnswer,
  shopReducer: shopReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(promiseMiddleware));

export default store;
