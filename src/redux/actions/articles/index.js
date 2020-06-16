import { createAction } from 'redux-actions';
import {
  fetchGetAllArticlesWithToken,
  fetchGetAllArticlesWithoutToken,
  fetchSetLikeArticle,
  fetchSetDislikeArticle,
  fetchGetArticlePathNameWithToken,
  fetchGetArticlePathName,
} from '../../../api/articles/index';
import { setErrorNetwork } from '../errors';

export const getArticlesAllRequest = createAction('GET_ARTICLES_ALL_REQUEST');
export const getArticlesAllSuccess = createAction('GET_ARTICLES_ALL_SUCCESS');
export const getArticlesAllFailure = createAction('GET_ARTICLES_ALL_FAILURE');

export const getAllArticles = (isAuth, token, currentPage) => async (
  dispatch
) => {
  await dispatch(getArticlesAllRequest({ isLoadingArticles: true }));
  let responseArticles = undefined;
  try {
    if (isAuth) {
      responseArticles = await fetchGetAllArticlesWithToken(token, currentPage);
    } else {
      responseArticles = await fetchGetAllArticlesWithoutToken(currentPage);
    }

    const articlesWithId = responseArticles.data.articles.map(
      (item, index) => ({
        id: index,
        ...item,
      })
    );
    await dispatch(
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
    await dispatch(getArticlesAllFailure({ isLoadingArticles: false }));
  }

  return responseArticles.data.articlesCount;
};

// create article

// export const articleCreateRequest = createAction('ARTICLE_CREATE_REQUEST');
// export const articleCreateSuccess = createAction('ARTICLE_CREATE_SUCCESS');
// export const articleCreateFailure = createAction('ARTICLE_CREATE_FAILURE');

// export const handleCreateArticle = (values, token) => async (dispatch) => {
//   await dispatch(articleCreateRequest());
//   try {
//     const valuesNewArticle = {
//       ...values,
//       tagList: [...values]
//     };
//     console.log(values)
//     await fetchCreateArticle(values, token);
//     await dispatch(articleCreateSuccess());
//   } catch (error) {
//     if (error.message === 'Network Error') {
//       dispatch(setErrorNetwork({ error }));
//     }
//     await dispatch(articleCreateFailure());
//   }
// };

//like and dislike

export const articleLikeRequest = createAction('ARTICLE_LIKE_REQUEST');
export const articleLikeSuccess = createAction('ARTICLE_LIKE_SUCCESS');
export const articleLikeFailure = createAction('ARTICLE_LIKE_FAILURE');

export const articleDislikeRequest = createAction('ARTICLE_DISLIKE_REQUEST');
export const articleDislikeSuccess = createAction('ARTICLE_DISLIKE_SUCCESS');
export const articleDislikeFailure = createAction('ARTICLE_DISLIKE_FAILURE');

export const setLikeArticle = (isLike, slug, token) => async (dispatch) => {
  if (isLike) {
    //если лайк поставлен- то его нужно убрать
    await dispatch(articleDislikeRequest({ isLoadingLike: true }));
    try {
      const responseArticle = await fetchSetDislikeArticle(slug, token);
      const newArticle = responseArticle.data.article;
      await dispatch(
        articleDislikeSuccess({ newArticle, slug, isLoadingLike: false })
      );
    } catch (error) {
      if (error.message === 'Network Error') {
        dispatch(setErrorNetwork({ error }));
      }
      await dispatch(articleDislikeFailure({ isLoadingLike: false }));
    }
  } else {
    //усли лайка нет - то его нужно поставить
    await dispatch(articleLikeRequest());
    try {
      const responseArticle = await fetchSetLikeArticle(slug, token);
      const newArticle = responseArticle.data.article;
      await dispatch(articleLikeSuccess({ newArticle, slug }));
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
  await dispatch(articleRequest({ isLoadingArticles: true }));
  try {
    let articleResponse = null;
    if (isAuth) {
      articleResponse = await fetchGetArticlePathNameWithToken(path, token);
    } else {
      articleResponse = await fetchGetArticlePathName(path);
    }
    const article = articleResponse.data.article;
    await dispatch(articleSuccess({ isLoadingArticles: false, article }));
  } catch (error) {
    await dispatch(articleFailure({ isLoadingArticles: false }));
  }
};
