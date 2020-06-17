import axios from 'axios';
import { URL } from '../../constants/url.constants/index';

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

export const fetchAllArticlesWithoutTokenApi = async (
  currentPage,
  limitCount
) => {
  const response = await axios({
    ...optionsWithoutToken,
    method: 'GET',
    url: `${URL}/articles?limit=${limitCount}&offset=${(currentPage - 1) * 10}`,
  });
  return response;
};

export const fetchAllArticlesWithTokenApi = async (
  token,
  currentPage,
  limitCount
) => {
  const response = await axios({
    method: 'GET',
    url: `${URL}/articles?limit=${limitCount}&offset=${(currentPage - 1) * 10}`,
    headers: headersWithToken(token),
  });
  return response;
};

export const fetchArticleApi = async (slug, token) => {
  const response = await axios({
    method: 'GET',
    url: `${URL}/articles/${slug}`,
    headers: headersWithToken(token),
  });
  return response;
};

export const createArticleApi = async (data, token) => {
  const response = await axios({
    method: 'POST',
    url: `${URL}/articles`,
    headers: headersWithToken(token),
    data: JSON.stringify(data),
  });
  return response;
};

// like and dislike
export const setLikeArticleApi = async (slug, token) => {
  const response = await axios({
    method: 'POST',
    url: `${URL}/articles/${slug}/favorite`,
    headers: headersWithToken(token),
  });
  return response;
};

export const setDislikeArticleApi = async (slug, token) => {
  const response = await axios({
    method: 'DELETE',
    url: `${URL}/articles/${slug}/favorite`,
    headers: headersWithToken(token),
  });
  return response;
};

// get one article with pathname

export const fetchArticlePathNameWithTokenApi = async (pathname, token) => {
  const response = await axios({
    method: 'GET',
    url: `${URL}${pathname}`,
    headers: headersWithToken(token),
  });
  return response;
};
export const fetchArticlePathNameApi = async (pathname) => {
  const response = await axios({
    method: 'GET',
    url: `${URL}${pathname}`,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  return response;
};

export const updateArticleApi = async (path, token, data) => {
  const response = await axios({
    method: 'PUT',
    url: `${URL}${path}`,
    data: JSON.stringify(data),
    headers: headersWithToken(token),
  });
  return response;
};

export const deleteArticleApi = async (pathname, token) => {
  const response = await axios({
    method: 'DELETE',
    url: `${URL}${pathname}`,
    headers: headersWithToken(token),
  });
  return response;
};
