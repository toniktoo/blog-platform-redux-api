import { createAction } from 'redux-actions';
import { uniqueId } from 'lodash';
import {
  fetchAllArticlesWithTokenApi,
  fetchAllArticlesWithoutTokenApi,
  setLikeArticleApi,
  setDislikeArticleApi,
  fetchArticlePathNameWithTokenApi,
  fetchArticlePathNameApi,
} from '../../../api/articles/index';
import { setErrorNetwork } from '../errors';

export const getArticlesAllRequest = createAction('GET_ARTICLES_ALL_REQUEST');
export const getArticlesAllSuccess = createAction('GET_ARTICLES_ALL_SUCCESS');
export const getArticlesAllFailure = createAction('GET_ARTICLES_ALL_FAILURE');

export const getAllArticles = (
  isAuth,
  token,
  currentPage,
  limitCount
) => async (dispatch) => {
  dispatch(getArticlesAllRequest({ isLoadingArticles: true }));
  let responseArticles = null;
  try {
    if (isAuth) {
      responseArticles = await fetchAllArticlesWithTokenApi(
        token,
        currentPage,
        limitCount
      );
    } else {
      responseArticles = await fetchAllArticlesWithoutTokenApi(
        currentPage,
        limitCount
      );
    }

    const articlesWithId = responseArticles.data.articles.map(
      (item, index) => ({
        id: uniqueId(),
        ...item,
      })
    );
    dispatch(
      getArticlesAllSuccess({
        isLoadingArticles: false,
        articles: articlesWithId,
      })
    );
  } catch (error) {
    console.log(error);
    if (error.message === 'Network Error') {
      dispatch(setErrorNetwork({ error }));
    }
    dispatch(getArticlesAllFailure({ isLoadingArticles: false }));
  }

  return responseArticles.data.articlesCount;
};

export const articleLikeRequest = createAction('ARTICLE_LIKE_REQUEST');
export const articleLikeSuccess = createAction('ARTICLE_LIKE_SUCCESS');
export const articleLikeFailure = createAction('ARTICLE_LIKE_FAILURE');

export const articleDislikeRequest = createAction('ARTICLE_DISLIKE_REQUEST');
export const articleDislikeSuccess = createAction('ARTICLE_DISLIKE_SUCCESS');
export const articleDislikeFailure = createAction('ARTICLE_DISLIKE_FAILURE');

export const setLikeArticle = (isLike, slug, token) => async (dispatch) => {
  if (isLike) {
    //если лайк поставлен- то его нужно убрать
    dispatch(articleDislikeRequest({ isLoadingLike: true }));
    try {
      const responseArticle = await setDislikeArticleApi(slug, token);
      const newArticle = responseArticle.data.article;
      dispatch(
        articleDislikeSuccess({ newArticle, slug, isLoadingLike: false })
      );
    } catch (error) {
      if (error.message === 'Network Error') {
        dispatch(setErrorNetwork({ error }));
      }
      dispatch(articleDislikeFailure({ isLoadingLike: false }));
    }
  } else {
    //усли лайка нет - то его нужно поставить
    dispatch(articleLikeRequest());
    try {
      const responseArticle = await setLikeArticleApi(slug, token);
      const newArticle = responseArticle.data.article;
      dispatch(articleLikeSuccess({ newArticle, slug }));
    } catch (error) {
      if (error.message === 'Network Error') {
        dispatch(setErrorNetwork({ error }));
      }
      await dispatch(articleLikeFailure());
    }
  }
};

// get one article

export const articleRequest = createAction('ARTICLE_REQUEST');
export const articleSuccess = createAction('ARTICLE_SUCCESS');
export const articleFailure = createAction('ARTICLE_FAILURE');

export const getArticle = (path, token, isAuth) => async (dispatch) => {
  dispatch(articleRequest({ isLoadingArticles: true }));
  try {
    let articleResponse = null;
    if (isAuth) {
      articleResponse = await fetchArticlePathNameWithTokenApi(path, token);
    } else {
      articleResponse = await fetchArticlePathNameApi(path);
    }
    const article = articleResponse.data.article;
    dispatch(articleSuccess({ isLoadingArticles: false, article }));
  } catch (error) {
    if (error.message === 'Network Error') {
      dispatch(setErrorNetwork({ error }));
    }
    dispatch(articleFailure({ isLoadingArticles: false }));
  }
};
