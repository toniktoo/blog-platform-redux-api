import axios from 'axios';

const URL = 'https://conduit.productionready.io/api';

const optionsWithoutToken = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
};

const headersWithToken = (token) => ({
  'Content-Type': 'application/json;charset=utf-8',
  Authorization: `Token ${token}`,
});

export const fetchGetAllArticlesWithoutToken = async (currentPage) => {
  const response = await axios({
    ...optionsWithoutToken,
    method: 'GET',
    url: `${URL}/articles?limit=10&offset=${(currentPage - 1) * 10}`,
  });
  return response;
};

export const fetchGetAllArticlesWithToken = async (token, currentPage) => {
  const response = await axios({
    method: 'GET',
    url: `${URL}/articles?limit=10&offset=${(currentPage - 1) * 10}`,
    headers: headersWithToken(token),
  });
  return response;
};

export const fetchGetArticle = async (slug, token) => {
  const response = await axios({
    method: 'GET',
    url: `${URL}/articles/${slug}`,
    headers: headersWithToken(token),
  });
  return response;
};

export const fetchGetArticle2 = async (path, token) => {
  const response = await axios({
    method: 'GET',
    url: `${URL}/${path}`,
    headers: headersWithToken(token),
  });
  return response;
};

export const fetchCreateArticle = async (data, token) => {
  const response = await axios({
    method: 'POST',
    url: `${URL}/articles`,
    headers: headersWithToken(token),
    data: JSON.stringify(data),
  });
  return response;
};

// like and dislike
export const fetchSetLikeArticle = async (slug, token) => {
  const response = await axios({
    method: 'POST',
    url: `${URL}/articles/${slug}/favorite`,
    headers: headersWithToken(token),
  });
  return response;
};

export const fetchSetDislikeArticle = async (slug, token) => {
  const response = await axios({
    method: 'DELETE',
    url: `${URL}/articles/${slug}/favorite`,
    headers: headersWithToken(token),
  });
  return response;
};

// get one article with pathname

export const fetchGetArticlePathNameWithToken = async (pathname, token) => {
  const response = await axios({
    method: 'GET',
    url: `${URL}${pathname}`,
    headers: headersWithToken(token),
  });
  return response;
};
export const fetchGetArticlePathName = async (pathname) => {
  const response = await axios({
    method: 'GET',
    url: `${URL}${pathname}`,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  return response;
};

export const fetchUpdateArticle = async (path, token, data) => {
  const response = await axios({
    method: 'PUT',
    url: `${URL}${path}`,
    data: JSON.stringify(data),
    headers: headersWithToken(token),
  });
  return response;
};

export const fetchDeleteArticle = async (pathname, token) => {
  const response = await axios({
    method: 'DELETE',
    url: `${URL}${pathname}`,
    headers: headersWithToken(token),
  });
  return response;
};
