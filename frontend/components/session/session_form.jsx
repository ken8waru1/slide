import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      display_name: '',
      demoUser: {email: 'demo@slide', password: 'girlsdemo'}
    }
    this.handleClick = this.handleClick.bind(this);
    this.demoLogin = this.demoLogin.bind(this)
  }

  handleClick(e) {
    e.preventDefault();
    this.props.processForm(this.state)
  }

  updateField(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  async demoLogin(e) {
    e.preventDefault();
    const demoUser = this.state.demoUser

    const sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    for (let i = 0; i <= demoUser.email.length; i++) {
      this.setState({ email: demoUser.email.substr(0, i) });
      await sleep(50);
    }

    await sleep(300); 

    for (let i = 0; i <= demoUser.password.length; i++) {
      this.setState({ password: demoUser.password.substr(0, i) });
      await sleep(50);
    }

    this.props.processForm(this.state);

    // if (demoUser.email) {
    //   setTimeout(() => this.setState({ 
    //     email: demoUser.email.concat(demoUser.email.slice(0, 1)),
    //     demoUser: { email: demoUser.email.slice(1) },
    //   }), 100)
    // } else if(demoUser.password) {
    //   setTimeout(() => this.setState({
    //     password: this.state.password.concat(demoUser.password.slice(0, 1)),
    //     demoUser: { password: demoUser.password.slice(1) }
    //   }), 100)
    // } else {
    //   this.props.processForm(this.state)
  }

  render () {
    return (
      <div className="session-form-container">
        <div className="session-form">
          {this.props.errors.map(error => (
            <p>{error}</p>
          ))}
          <span className="session-description">{this.props.formType === 'Signup' ? "Slide into Everyone's DMs" : "Sign in to Slide" }</span>
          {this.props.link}
          <form className="session-flex" /*onSubmit={this.handleClick}*/>
            <label>
              <h3 className="session-field">Email</h3>
              <input className="session-input" type="text" onChange={this.updateField('email')} value={this.state.email} placeholder="Email"/>
            </label>
            <br/>
            <label>
              <h3 className="session-field">Password</h3>
              <input className="session-input" type="password" onChange={this.updateField('password')} value={this.state.password} placeholder="Password" />
            </label>
            <br/>
            {this.props.formType === 'Signup' ?
              <label>
                <h3 className="session-field">Display Name</h3>
                <input className="session-input" type="text" onChange={this.updateField('display_name')} value={this.state.displayName} placeholder="Display Name"/>
                <br/>
              </label>
              : <></>
            }
            <button className="session-submit" onClick={this.handleClick}>{this.props.formType === 'Login' ? 'Log In!' : 'Sign Up!'}</button>
            {this.props.formType === 'Login' ?
              <button className="session-submit" onClick={this.demoLogin}>Demo Login</button> : <></>
            }
            <p className="conditional-session">{this.props.formType === 'Signup' ? "Have an account? " : "Don't have an account? "}{this.props.formType === 'Signup' ? 
              <span><Link to="/login">Login</Link></span> : <span><Link to="/signup">Signup</Link></span>
              }
            </p>
          </form>
        </div>
      </div>
    )
  }
}

export default SessionForm;