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

// 🔐 persist config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['decidingQuestionAnswer', 'selectYourState'], // ← add reducers you want to persist
};
// 🧠 persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
// 🏪 create store
const store = createStore(persistedReducer, applyMiddleware(promiseMiddleware));
// ⏳ persistor
export const persistor = persistStore(store);

export default store;
