import React from 'react';
import { Route } from 'react-router-dom';
import SignupFormContainer from '../components/session/signup_form_container';
import LoginFormContainer from '../components/session/login_form_container';
import { AuthRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container'
import SplashPage from './splash/splash_page';

const App = () => (
  <div id="main-section">
    <Route path="/" component={NavBarContainer} />
    <Route path exact="/" component={SplashPage} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;