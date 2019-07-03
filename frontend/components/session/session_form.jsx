import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      display_name: '',
    }
    this.handleClick = this.handleClick.bind(this);
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

  render () {
    return (
      <div className="session-form-container">
        <div className="session-form">
          {this.props.errors.map(error => (
            <p>{error}</p>
          ))}
          <span className="session-description">{this.props.formType === 'Signup' ? "Slide into Everyone's DMs" : "Sign in to Slide" }</span>
          {this.props.link}
          <form className="session-flex" onSubmit={this.handleClick}>
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
            <button className="session-submit">{this.props.formType === 'Login' ? 'Log In!' : 'Sign Up!'}</button>
            <p className="conditional-session">{this.props.formType === 'Signup' ? "Have an account? " : "Don't have an account? "}{this.props.formType === 'Signup' ? 
              <Link to="/login">Login</Link> : <Link to="/signup">Signup</Link>
              }
            </p>
          </form>
        </div>
      </div>
    )
  }
}

export default SessionForm;