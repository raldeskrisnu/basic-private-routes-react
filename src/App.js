import React, { Component } from 'react';
import './App.css';
import { Route, Link, Redirect, withRouter, BrowserRouter as Router } from 'react-router-dom';
import Login from './Login';
import { SecretRoute } from './SecretRoute';
import { AuthService } from './AuthService';

const Public = () => (
  <div> This is a public page </div>
);

const Private = () => (
  <div> This is a private page </div>
);

const AuthStatus = withRouter(({ history }) => (
  AuthService.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        AuthService.logout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
));

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ width: 1000, margin: '0 auto' }}>
        <AuthStatus />
          <ul>
            <li><Link to='/public'> Public </Link></li>
            <li><Link to='/private'> Private </Link></li>
          </ul>
        <hr/>
        <Route path='/public' component={Public} />
          <Route path="/login" component={Login}/>
          <SecretRoute path='/private' component={Private} />
        </div>
      </Router>
    );
  }
}

export default App;