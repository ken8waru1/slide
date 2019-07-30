import React from 'react';

class CreateDMForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Other User Name',
      purpose: '',
      creator_id: this.props.currentUser.id,
      is_direct_message: true
    }

    this.handleClick = this.handleClick.bind(this);
  }

  updateField(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleClick(e) {
    e.preventDefault();
    this.props.createChannel(this.state).then(channelInfo => {
      this.props.closeModal();
      this.props.fetchSubscriptions();
      this.props.fetchChannel(channelInfo.channel.id)
      return (
        this.props.history.push(`/channels/${channelInfo.channel.id}`)
      )
    })
  }

  render() {
    return (
      <div className="contents-container">
        <div className="channel-form-container">
          <h1 className="create-channel-header">Direct Messsages</h1>

          <button className="channel-cancel" onClick={this.props.closeModal} >Cancel</button>
        </div>
      </div>
    )
  }
}

export default CreateDMForm;