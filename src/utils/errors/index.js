import { setErrorNetwork } from '../../redux/actions/errors';

// errors auth

export const errorsSignInProcessing = (error, setFieldError, dispatch) => {
  if (error.message === 'Network Error') {
    console.log(error);
    dispatch(setErrorNetwork({ error }));
  }
  const responseErrors = error.response.data.errors;

  if (responseErrors['email or password']) {
    setFieldError('email', 'email or password is invalid');
    setFieldError('password', 'email or password is invalid');
  }
};

export const errorsSignUpProcessing = (error, setFieldError, dispatch) => {
  if (error.message === 'Network Error') {
    dispatch(setErrorNetwork({ error }));
  }

  const responseErrors = error.response.data.errors;
  for (const key in responseErrors) {
    setFieldError(key.toString(), responseErrors[key][0]);
  }
};
