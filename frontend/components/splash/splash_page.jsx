import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container'

class SplashPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
    }

    this.updateEmail = this.updateEmail.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  updateEmail(e) {
    this.setState({ email: e.currentTarget.value })
  }

  handleClick(e) {  
    e.preventDefault();
    return (
      this.props.history.push({ pathname: '/signup', state: {email: this.state.email } })
    )
  }

  render() {
    return (
      <div className="nav-body-container">
        <NavBarContainer />
        <div className="splash-container">
          <div className="splash-description">
            <h1 className="splash-header">Whatever work you do,
              <br/>
              you can do it in Slide</h1>

              <p className="splash-snip">Slide gives your team the power and alignment you need to do your best work</p>
            <div className="tryit">
              <form onSubmit={this.handleClick} className="try-form">
                <input className="try-input" placeholder="Your email" onChange={this.updateEmail} type="text" /><input className="try-submit" type="submit" value="TRY FOR FREE" />
              </form>
            </div>
          </div>

          <div className="floating-icons">
            <div className="asana-container">
              <img className="asana-icon" src={window.images.asana} />
            </div>

            <div className="atlassian-container">
              <img className="atlassian-icon" src={window.images.atlassian} />
            </div>

            <div className="bluechat-container">
              <img className="bluechat-icon" src={window.images.bluechat} />
            </div>

            <div className="dropbox-container">
              <img className="dropbox-icon" src={window.images.dropbox} />
            </div>

            <div className="google-container">
              <img className="google-icon" src={window.images.google} />
            </div>

            <div className="greenchat-container">
              <img className="greenchat-icon" src={window.images.greenchat} />
            </div>

            <div className="hubspot-container">
              <img className="hubspot-icon" src={window.images.hubspot} />
            </div>

            <div className="redchat-container">
              <img className="redchat-icon" src={window.images.redchat} />
            </div>

            <div className="yellowchat-container">
              <img className="yellowchat-icon" src={window.images.yellowchat} />
            </div>

            <div className="zendesk-container">
              <img className="zendesk-icon" src={window.images.zendesk} />
            </div>

            <div className="zoom-container">
              <img className="zoom-icon" src={window.images.zoom} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SplashPage;