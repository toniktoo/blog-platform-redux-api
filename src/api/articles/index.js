import axios from 'axios';
import { URL } from '../../constants/url.constants/index';

export const fetchArticleApi = async (slug) => {
  const response = await axios({
    method: 'GET',
    url: `${URL}/articles/${slug}`,
  });
  return response;
};

export const createArticleApi = async (data) => {
  const response = await axios({
    method: 'POST',
    url: `${URL}/articles`,
    data: JSON.stringify(data),
  });
  return response;
};

// like and dislike
export const setLikeArticleApi = async (slug) => {
  const response = await axios({
    method: 'POST',
    url: `${URL}/articles/${slug}/favorite`,
  });
  return response;
};

export const setDislikeArticleApi = async (slug) => {
  const response = await axios({
    method: 'DELETE',
    url: `${URL}/articles/${slug}/favorite`,
  });
  return response;
};

// get one article with pathname

export const fetchArticlePathNameWithTokenApi = async (pathname) => {
  const response = await axios({
    method: 'GET',
    url: `${URL}${pathname}`,
  });
  return response;
};
export const fetchArticlePathNameApi = async (pathname) => {
  const response = await axios({
    method: 'GET',
    url: `${URL}${pathname}`,
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
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Token ${token}`,
    },
  });
  return response;
};

export const updateArticleApi = async (path, data) => {
  const response = await axios({
    method: 'PUT',
    url: `${URL}${path}`,
    data: JSON.stringify(data),
  });
  return response;
};

export const deleteArticleApi = async (pathname) => {
  const response = await axios({
    method: 'DELETE',
    url: `${URL}${pathname}`,
  });
  return response;
};

export const fetchAllArticlesWithoutTokenApi = async (
  currentPage,
  limitCount
) => {
  const response = await axios({
    method: 'GET',
    url: `${URL}/articles?limit=${limitCount}&offset=${(currentPage - 1) * 10}`,
  });
  return response;
};
