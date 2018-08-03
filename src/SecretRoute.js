import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthService } from './AuthService';

export const SecretRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      AuthService.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  );