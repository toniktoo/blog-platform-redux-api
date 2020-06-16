import { createAction } from 'redux-actions';
import { fetchSignIn, fetchSignUp } from '../../../api/auth/index';
import {
  setItemDB,
  errorsSignInProcessing,
  errorsSignUpProcessing,
} from '../../../utils/index';

export const signUpUserRequest = createAction('USER_SIGNUP_REQUEST');
export const signUpUserSuccess = createAction('USER_SIGNUP_SUCCESS');
export const signUpUserFailure = createAction('USER_SIGNUP_FAILURE');

// sign-up

export const signUpAuth = ({
  username,
  email,
  password,
  setFieldError,
}) => async (dispatch) => {
  dispatch(signUpUserRequest({ isLoadingAuth: true }));
  try {
    const data = {
      user: { email, password, username },
    };
    const response = await fetchSignUp(data);
    const token = await response.data.user.token;
    const name = await response.data.user.username;

    const currentUser = {
      isAuth: true,
      name: name,
      token: token,
      isLoadingAuth: false,
    };
    setItemDB('currentUser', currentUser);

    await dispatch(
      signUpUserSuccess({
        isAuth: true,
        isLoadingAuth: false,
        token,
        name,
      })
    );
  } catch (error) {
    errorsSignUpProcessing(error, setFieldError, dispatch);
    dispatch(
      signUpUserFailure({
        isAuth: false,
        isLoadingAuth: false,
      })
    );
  }
};

// sign-in

export const signInUserRequest = createAction('USER_SIGNIN_REQUEST');
export const signInUserSuccess = createAction('USER_SIGNIN_SUCCESS');
export const signInUserFailure = createAction('USER_SIGNIN_FAILURE');

export const signInAuth = ({
  username,
  email,
  password,
  setFieldError,
}) => async (dispatch) => {
  dispatch(signInUserRequest({ isLoadingAuth: true }));
  try {
    const data = {
      user: { email, password, username },
    };
    const response = await fetchSignIn(data);
    const token = await response.data.user.token;
    const name = await response.data.user.username;

    const currentUser = {
      isAuth: true,
      name: name,
      token: token,
      isLoadingAuth: false,
    };
    setItemDB('currentUser', currentUser);

    await dispatch(
      signInUserSuccess({
        currentUser,
        isFirstValidate: true,
      })
    );
  } catch (error) {
    errorsSignInProcessing(error, setFieldError, dispatch);
    dispatch(
      signInUserFailure({
        isAuth: false,
        isLoadingAuth: false,
      })
    );
  }
};

// log-out

export const logout = createAction('LOG_OUT_PROFILE');

// first validate user

export const firstValidateUserRequest = createAction(
  'USER_FIRST_VALIDATE_REQUEST'
);
export const firstValidateUserSuccess = createAction(
  'USER_FIRST_VALIDATE_SUCCESS'
);
export const firstValidateUserFailure = createAction(
  'USER_FIRST_VALIDATE_FAILURE'
);
