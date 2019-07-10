import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      body: "",
      user_id: this.props.currentUser.id,
      channel_id: this.props.channel
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    App[this.props.channel].speak(this.state);
    this.setState({ body: "" });
  }

  render() {
    return (
      <div className="message-input">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.body} onChange={this.update('body')} placeholder="Type message here"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default MessageForm