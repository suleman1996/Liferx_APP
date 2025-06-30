import { createStore, combineReducers } from 'redux';
import exampleReducer from './reducers';

const rootReducer = combineReducers({
  example: exampleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
