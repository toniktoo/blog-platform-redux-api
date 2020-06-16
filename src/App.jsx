import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header';
import { connect } from 'react-redux';
import FormSignIn from './components/auth/signIn/index';
import FormSignUp from './components/auth/signUp/index';
import Home from './components/home';
import {
  firstValidateUserRequest,
  firstValidateUserSuccess,
  firstValidateUserFailure,
} from './redux/actions/auth';
import { getItemDB } from './utils';
import { ModalError } from './components/modal';
import CreateArticle from './components/articles/createArticle';
import ArticleInfo from './components/articles/article/index';
import ComponentEditArticle from './components/articles/edit/index';
import PrivateRoute from './components/routes/private/index';
import AuthRoute from './components/routes/auth/index';

const App = ({ isAuth, dispatch, errors }) => {
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
          <Route path="/" exact component={Home} />
          <AuthRoute path="/sign-in" component={FormSignIn} />
          <AuthRoute path="/sign-up" component={FormSignUp} />
          <PrivateRoute path="/add" component={CreateArticle} />
          <PrivateRoute
            path="/articles/:slug/edit"
            exact
            component={ComponentEditArticle}
          />
          <Route path="/articles/:slug" exact component={ArticleInfo} />
          <Redirect to="/sign-in" />
        </Switch>
      </div>
      {errors ? <ModalError errors={errors} /> : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.reducerAuth.currentUser.isAuth,
  errors: state.reducerErrors.errors,
});

export default connect(mapStateToProps)(App);
