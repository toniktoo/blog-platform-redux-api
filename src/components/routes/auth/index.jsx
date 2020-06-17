import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../../../constants/routes.constants/index';

const AuthRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth ? <Redirect to={routes['home']} /> : <Component {...props} />
    }
  />
);

export default connect((state) => ({
  isAuth: state.reducerAuth.currentUser.isAuth,
}))(AuthRoute);
