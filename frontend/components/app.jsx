import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupFormContainer from '../components/session/signup_form_container';
import LoginFormContainer from '../components/session/login_form_container';
import ChannelIndexContainer from '../components/channel/channel_index_container';
import { AuthRoute } from '../util/route_util';
// import NavBarContainer from './nav_bar/nav_bar_container'
import SplashPage from './splash/splash_page';

const App = () => (
  <div id="main-section">
    <Route path="/channels/:channelId" component={ChannelIndexContainer} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <Route exact path="/" component={SplashPage} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;