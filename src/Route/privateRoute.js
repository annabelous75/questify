import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginSuccess } from '../redux/actions';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    element={auth ? <Component /> : <Navigate to="/" />}
  />
);

const mapStateToProps = state => ({
  auth: loginSuccess(state)
});

export default connect(mapStateToProps)(PrivateRoute);
