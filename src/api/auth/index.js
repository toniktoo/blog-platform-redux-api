import axios from 'axios';
import { URL } from '../../constants/url.constants/index';

const optionsAuth = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  json: true,
};

export const fetchSignUpApi = async (data) => {
  const response = await axios({
    ...optionsAuth,
    data: JSON.stringify(data),
    url: `${URL}/users`,
  });
  return response;
};

export const fetchSignInApi = async (data) => {
  const response = await axios({
    ...optionsAuth,
    data: JSON.stringify(data),
    url: `${URL}/users/login`,
  });
  return response;
};
