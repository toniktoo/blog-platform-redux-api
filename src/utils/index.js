import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  parseISO,
} from 'date-fns';
import { setErrorNetwork } from '../redux/actions/errors';

// local database

export const setItemDB = (nameItem, valueItem) =>
  localStorage.setItem(nameItem, JSON.stringify(valueItem));
export const removeItemDB = (nameItem) => localStorage.removeItem(nameItem);

export const getItemDB = (valueItem) => JSON.parse(localStorage[valueItem]);

// date

export default class DiffTime {
  constructor(timeNow, timeCreatedAt) {
    this.timeNow = timeNow;
    this.timeCreatedAt = timeCreatedAt;
  }

  getDay() {
    return differenceInDays(this.timeNow, this.timeCreatedAt);
  }

  getHours() {
    let diffHours = differenceInHours(this.timeNow, this.timeCreatedAt);
    diffHours %= 24;
    return diffHours;
  }

  getMinutes() {
    let diffMinutes = differenceInMinutes(this.timeNow, this.timeCreatedAt);
    diffMinutes %= 60;
    return diffMinutes;
  }
}

export const getFormatedDate = (date) => {
  const diffTime = new DiffTime(new Date(), parseISO(date));
  const diffDay = diffTime.getDay();
  const diffHours = diffTime.getHours();
  const diffMinutes = diffTime.getMinutes();

  const validateTimeEmpty = (diffItem, nameItem) =>
    diffItem !== 0 ? `${diffItem} ${nameItem}` : '';

  const renderTimeAfterCreation = () => {
    if (diffDay === 0 && diffHours === 0 && diffMinutes === 0) return 'now';
    return `${validateTimeEmpty(diffDay, 'days')} ${validateTimeEmpty(
      diffHours,
      'hours'
    )} ${validateTimeEmpty(diffMinutes, 'minutes')} ago`;
  };

  return renderTimeAfterCreation();
};

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
