import React from 'react';
import { Route } from 'react-router-dom';
import SignupFormContainer from '../components/session/signup_form_container';
import LoginFormContainer from '../components/session/login_form_container';
import ChannelIndexContainer from '../components/channel/channel_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashPage from './splash/splash_page';
import Modal from './modal/modal';

const App = () => (
  <div id="main-section">
    <Modal />
    <ProtectedRoute path="/channels/:channelId" component={ChannelIndexContainer} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <Route exact path="/" component={SplashPage} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;