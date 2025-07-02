import { createStore, combineReducers } from 'redux';
import loginReducer from '../Screens/Auth/Login/reducer';
import twoStepVerificationReducer from '../Screens/Auth/2StepVerification/reducer';

const rootReducer = combineReducers({
  login: loginReducer,
  twoStepVerification: twoStepVerificationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
