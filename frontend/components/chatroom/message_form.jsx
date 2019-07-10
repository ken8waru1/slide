import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      body: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    if (e.key === 'Enter') {
      App[this.props.channel].speak({ body: this.state.body, user_id: this.props.currentUser.id, channel_id: this.props.channel });
      this.setState({ body: "" });
    }
  }

  render() {
    return (
      <div className="message-input-container">
        <form>
          <input type="text" value={this.state.body} onChange={this.update('body')} onKeyPress={this.handleSubmit} placeholder="Type message here"/>
        </form>
      </div>
    );
  }
}

export default MessageForm