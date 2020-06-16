import { handleActions } from 'redux-actions';
import { setErrorNetwork } from '../../actions/errors/index';

const initValues = {
  errors: null,
};

export const reducerErrors = handleActions(
  {
    [setErrorNetwork]: (state, { payload: { error } }) => {
      return {
        ...state,
        errors: error.message,
      };
    },
  },
  initValues
);
