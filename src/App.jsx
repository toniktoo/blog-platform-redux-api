import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header';
import { useDispatch } from 'react-redux';
import FormSignIn from './components/auth/signIn/index';
import FormSignUp from './components/auth/signUp/index';
import Home from './components/home';
import {
  firstValidateUserRequest,
  firstValidateUserSuccess,
  firstValidateUserFailure,
} from './redux/actions/auth';
import { getItemDB } from './utils/localDB';
import { ModalError } from './components/modal';
import CreateArticle from './components/articles/createArticle';
import ArticleInfo from './components/articles/article/index';
import ComponentEditArticle from './components/articles/edit/index';
import PrivateRoute from './components/routes/private/index';
import AuthRoute from './components/routes/auth/index';
import routes from './constants/routes.constants/index';

const App = () => {
  const dispatch = useDispatch();
  //при монтировании проверяем вышел ли пользователь из профиля в прошлый раз
  useEffect(() => {
    dispatch(firstValidateUserRequest());
    if (localStorage.currentUser) {
      const currentUser = getItemDB('currentUser');
      dispatch(
        firstValidateUserSuccess({ currentUser, isFirstValidate: true })
      );
    } else {
      dispatch(firstValidateUserFailure({ isFirstValidate: true }));
    }
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <div className="content">
        <Switch>
          <Route path={routes['home']} exact component={Home} />
          <AuthRoute path={routes['sign-in']} component={FormSignIn} />
          <AuthRoute path={routes['sign-up']} component={FormSignUp} />
          <PrivateRoute path={routes['add']} component={CreateArticle} />
          <PrivateRoute
            path={routes['article-edit']}
            exact
            component={ComponentEditArticle}
          />
          <Route path={routes['article-info']} exact component={ArticleInfo} />
          <Redirect to={routes['home']} />
        </Switch>
      </div>
      <ModalError />
    </div>
  );
};

export default App;
