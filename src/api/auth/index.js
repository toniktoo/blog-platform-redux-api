import axios from 'axios';

const URL = 'https://conduit.productionready.io/api';

const optionsAuth = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  json: true,
};

export const fetchSignUp = async (data) => {
  const response = await axios({
    ...optionsAuth,
    data: JSON.stringify(data),
    url: `${URL}/users`,
  });
  return response;
};

export const fetchSignIn = async (data) => {
  const response = await axios({
    ...optionsAuth,
    data: JSON.stringify(data),
    url: `${URL}/users/login`,
  });
  return response;
};
