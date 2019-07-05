import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.location.state ? this.props.location.state.email : '',
      password: '',
      display_name: '',
      demoUser: {email: 'demo@slide', password: 'girlsdemo'}
    }
    this.handleClick = this.handleClick.bind(this);
    this.demoLogin = this.demoLogin.bind(this)
  }

  componentDidMount() {
    this.props.removeErrors()
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
  }


  render () {
    return (
      <div className="session-form-container">
        {this.props.errors.length > 0 ?  
          <div className="errors">
            <span className="color-bar"></span>
            <ul>
              {this.props.errors.map(error => (
                <li>{error}</li>
              ))}
            </ul>
          </div> : <></>
        }

        <div className="session-form" >
          <span className="session-description">{this.props.formType === 'Signup' ? "Slide into Everyone's DMs" : "Sign in to Slide" }</span>
          {this.props.link}
          <form className="session-flex" autoComplete="off" /*onSubmit={this.handleClick}*/>
            <label>
              <h3 className="session-field">Email</h3>
              <input className="session-input" autoComplete="off" type="text" onChange={this.updateField('email')} value={this.state.email} placeholder="Email"/>
            </label>
            <br/>
            <label>
              <h3 className="session-field">Password</h3>
              <input className="session-input" autoComplete="off" type="password" onChange={this.updateField('password')} value={this.state.password} placeholder="Password" />
            </label>
            <br/>
            {this.props.formType === 'Signup' ?
              <label>
                <h3 className="session-field">Display Name</h3>
                <input className="session-input" autoComplete="off" type="text" onChange={this.updateField('display_name')} value={this.state.displayName} placeholder="Display Name"/>
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