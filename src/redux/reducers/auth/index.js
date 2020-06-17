import { handleActions } from 'redux-actions';
import {
  signUpUserRequest,
  signUpUserSuccess,
  signUpUserFailure,
  signInUserRequest,
  signInUserSuccess,
  signInUserFailure,
  firstValidateUserRequest,
  firstValidateUserSuccess,
  firstValidateUserFailure,
  logout,
} from '../../actions/auth/index';

const initValues = {
  currentUser: {
    isAuth: false,
    username: null,
    token: null,
    isLoadingAuth: false,
    isFirstValidate: false,
  },
};

export const reducerAuth = handleActions(
  {
    // sign-up

    [signUpUserRequest]: (state, { payload: { isLoadingAuth } }) => {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          isLoadingAuth,
        },
      };
    },
    [signUpUserSuccess]: (
      state,
      { payload: { currentUser, isFirstValidate } }
    ) => {
      const { isAuth, token, name, isLoadingAuth } = currentUser;
      return {
        ...state,
        currentUser: {
          isAuth,
          username: name,
          token,
          isLoadingAuth,
          isFirstValidate,
        },
      };
    },
    [signUpUserFailure]: (state, { payload: { isLoadingAuth, isAuth } }) => {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          isLoadingAuth,
          isAuth,
        },
      };
    },

    // sign-in

    [signInUserRequest]: (state, { payload: { isLoadingAuth } }) => {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          isLoadingAuth,
        },
      };
    },
    [signInUserSuccess]: (
      state,
      { payload: { currentUser, isFirstValidate } }
    ) => {
      const { isAuth, token, name, isLoadingAuth } = currentUser;
      return {
        ...state,
        currentUser: {
          isAuth,
          username: name,
          token,
          isLoadingAuth,
          isFirstValidate,
        },
      };
    },
    [signInUserFailure]: (state, { payload: { isLoadingAuth, isAuth } }) => {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          isLoadingAuth,
          isAuth,
        },
      };
    },

    // log-out
    [logout]: (state, { payload: { isAuth, isLoadingAuth, token, name, isFirstValidate } }) => {
      return {
        ...state,
        currentUser: {
          isAuth,
          username: name,
          token,
          isLoadingAuth,
          isFirstValidate,
        },
      };
    },
    [firstValidateUserRequest]: (state, { payload }) => {
      return { ...state };
    },
    [firstValidateUserSuccess]: (
      state,
      { payload: { currentUser, isFirstValidate } }
    ) => {
      const { isAuth, token, name, isLoadingAuth } = currentUser;
      return {
        ...state,
        currentUser: {
          isAuth,
          username: name,
          token,
          isLoadingAuth,
          isFirstValidate,
        },
      };
    },
    [firstValidateUserFailure]: (state, { payload: { isFirstValidate } }) => {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          isFirstValidate,
        },
      };
    },
  },
  initValues
);
