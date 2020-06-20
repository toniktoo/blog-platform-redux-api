import { handleActions } from 'redux-actions';
import {
  getArticlesAllRequest,
  getArticlesAllSuccess,
  getArticlesAllFailure,
  articleLikeRequest,
  articleLikeSuccess,
  articleLikeFailure,
  articleDislikeRequest,
  articleDislikeSuccess,
  articleDislikeFailure,
  articleRequest,
  articleSuccess,
  articleFailure,
} from '../../actions/articles/index';

const initValues = {
  articles: [],
  isLoadingArticles: false,
  countArticles: null,
  article: {
    title: '',
    createdAt: '',
    updatedAt: '',
    description: '',
    body: '',
    tagList: [],
    favorited: false,
    favoritesCount: '',
    author: {
      username: '',
      bio: '',
      image: '',
    },
  },
};

export const reducerArticles = handleActions(
  {
    // get all articles
    [getArticlesAllRequest]: (state, { payload: { isLoadingArticles } }) => ({
      ...state,
      isLoadingArticles,
    }),
    [getArticlesAllSuccess]: (
      state,
      { payload: { isLoadingArticles, articles, countArticles } }
    ) => ({
      ...state,
      isLoadingArticles,
      articles,
      countArticles,
    }),
    [getArticlesAllFailure]: (state, { payload: { isLoadingArticles } }) => ({
      ...state,
      isLoadingArticles,
    }),
    // like article
    [articleLikeRequest]: (state, { payload }) => ({ ...state }),
    [articleLikeSuccess]: (state, { payload: { newArticle, slug } }) => {
      const newArticles = state.articles.map((article) => {
        if (article.slug === slug) {
          return { id: article.id, ...newArticle };
        }
        return article;
      });
      return {
        ...state,
        articles: [...newArticles],
      };
    },
    [articleLikeFailure]: (state, { payload }) => ({ ...state }),
    //dislike article
    [articleDislikeRequest]: (state, { payload }) => ({ ...state }),
    [articleDislikeSuccess]: (state, { payload: { newArticle, slug } }) => {
      const newArticles = state.articles.map((article) => {
        if (article.slug === slug) {
          return { id: article.id, ...newArticle };
        }
        return article;
      });
      return {
        ...state,
        articles: [...newArticles],
      };
    },
    [articleDislikeFailure]: (state, { payload }) => ({ ...state }),

    // get article
    [articleRequest]: (state, { payload: { isLoadingArticles } }) => {
      return { ...state, isLoadingArticles };
    },
    [articleSuccess]: (state, { payload: { isLoadingArticles, article } }) => {
      return {
        ...state,
        isLoadingArticles,
        article,
      };
    },
    [articleFailure]: (state, { payload: { isLoadingArticles } }) => {
      return { ...state, isLoadingArticles };
    },
  },

  initValues
);
