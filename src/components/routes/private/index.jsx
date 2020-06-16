import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth || localStorage.currentUser ? (
        <Component {...props} />
      ) : (
        <Redirect to="/sign-in" />
      )
    }
  />
);

export default connect((state) => ({
  isAuth: state.reducerAuth.currentUser.isAuth,
}))(PrivateRoute);
