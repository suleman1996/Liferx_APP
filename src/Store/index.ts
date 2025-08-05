import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import promiseMiddleware from 'redux-promise';
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
import phoneVerifyReducer from '../Screens/PhoneVerification/reducer';
import verificationCodeReducer from '../Screens/OtpPhoneVerify/reducer';
import productMedicineReducer from '../Screens/SuggestMedicine/reducer';
import dosageReducers from '../Screens/SelectDosage/reducer';
import dosageVarientReducers from '../Screens/DosageVarient/reducer';
import paymentPlansReducers from '../Screens/SelectPlans/reducer';
import onBoardingReducer from '../Screens/Auth/Onboarding/reducer';

const PERSIST_WHITELIST = [
  'login',
  'registerReducer',
  'decidingQuestionAnswer',
  'selectYourState',
  'RegularQuestionsAnswer',
  'productMedicineReducer',
  'dosageReducers',
  'dosageVarientReducers',
  'paymentPlansReducers',
  'onBoardingReducer',
];

// 🔐 enhanced reducer that resets non-persisted state on logout
const logoutReducer = (reducer: any, key: string) => {
  const initial = reducer(undefined, { type: '@@INIT' });
  return (state: any, action: any) => {
    if (action.type === 'LOGOUT') {
      if (PERSIST_WHITELIST.includes(key)) {
        return state; // keep persisted state
      }
      return initial; // reset only non-persisted reducers
    }
    return reducer(state, action);
  };
};

const rootReducer = combineReducers({
  login: logoutReducer(loginReducer, 'login'),
  onBoardingReducer: logoutReducer(onBoardingReducer, 'onBoardingReducer'),
  registerReducer: logoutReducer(registerReducer, 'registerReducer'),
  twoStepVerification: logoutReducer(
    twoStepVerificationReducer,
    'twoStepVerification',
  ),
  decidingQuestionAnswer: logoutReducer(
    decidingQuestionAnswer,
    'decidingQuestionAnswer',
  ),
  selectYourState: logoutReducer(selectYourState, 'selectYourState'),
  RegularQuestionsAnswer: logoutReducer(
    RegularQuestionsAnswer,
    'RegularQuestionsAnswer',
  ),
  shopReducer: logoutReducer(shopReducer, 'shopReducer'),
  personalInfoReducer: logoutReducer(personalInfoReducer, ''),
  phoneVerifyReducer: logoutReducer(phoneVerifyReducer, 'phoneVerifyReducer'),
  verificationCodeReducer: logoutReducer(
    verificationCodeReducer,
    'verificationCodeReducer',
  ),
  productMedicineReducer: logoutReducer(
    productMedicineReducer,
    'productMedicineReducer',
  ),
  dosageReducers: logoutReducer(dosageReducers, 'dosageReducers'),
  dosageVarientReducers: logoutReducer(
    dosageVarientReducers,
    'dosageVarientReducers',
  ),
  paymentPlansReducers: logoutReducer(
    paymentPlansReducers,
    'paymentPlansReducers',
  ),
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: PERSIST_WHITELIST,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(promiseMiddleware));

export const persistor = persistStore(store);
export default store;
