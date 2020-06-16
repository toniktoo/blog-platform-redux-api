import { combineReducers } from 'redux';
import { reducerAuth } from '../auth/index';
import { reducerErrors } from '../errors/index';
import { reducerArticles } from '../articles/index';

export const rootReducer = combineReducers({
  reducerAuth,
  reducerErrors,
  reducerArticles,
});
