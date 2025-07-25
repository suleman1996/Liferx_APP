// Store/index.ts

import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';

import loginReducer from '../Screens/Auth/Login/reducer';
import twoStepVerificationReducer from '../Screens/Auth/2StepVerification/reducer';
import decidingQuestionAnswer from '../Screens/DecidingQuestions/reducer';
import selectYourState from '../Screens/SelectState/reducer';
import RegularQuestionsAnswer from '../Screens/Questionaire/reducer';
import registerReducer from '../Screens/Auth/Register/reducer';
import shopReducer from '../Screens/Shop/reducer';
import personalInfoReducer from '../Screens/PersonalInformation/reducer';
import { logoutReducer } from '../utils/LogoutReducer/LogoutReducer';
import phoneVerifyReducer from '../Screens/PhoneVerification/reducer';

const rootReducer = combineReducers({
  login: logoutReducer(loginReducer),
  registerReducer: logoutReducer(registerReducer),
  twoStepVerification: logoutReducer(twoStepVerificationReducer),
  decidingQuestionAnswer: logoutReducer(decidingQuestionAnswer),
  selectYourState: logoutReducer(selectYourState),
  RegularQuestionsAnswer: logoutReducer(RegularQuestionsAnswer),
  shopReducer: logoutReducer(shopReducer),
  personalInfoReducer: logoutReducer(personalInfoReducer),
  phoneVerifyReducer: logoutReducer(phoneVerifyReducer),
});

export type RootState = ReturnType<typeof rootReducer>;

// 🔐 persist config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    'decidingQuestionAnswer',
    'selectYourState',
    'RegularQuestionsAnswer',
    'personalInfoReducer',
    'phoneVerifyReducer',
    'login',
  ], // ← add reducers you want to persist
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(promiseMiddleware));
export const persistor = persistStore(store);

export default store;
