import React from 'react';

class CreateChannelForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      purpose: '',
      creator_id: this.props.currentUser.id
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

  render () {
    return (
      <div className="contents-container">
        <div className="channel-form-container">
          <h1 className="create-channel-header">Create a channel</h1>
          <p className="create-channel-info">Channels are where your members try communicate (TRY). They're best when there's a topic and everyone completely ignores it.</p>
          <form className="channel-form">
            <label><div className="channel-field">Name</div>
              <input className="channel-input" type="text" placeholder="e.g. Bananas" onChange={this.updateField('name')} value={this.state.name}/>
            </label>

            <label><div className="channel-field">Purpose <span id="optional-purpose">(optional)</span></div>
              <input className="channel-input" type="text" onChange={this.updateField('purpose')} value={this.state.purpose} />
            </label>
            <div className="button-container">
              {this.state.name === '' ? (
                <button className="channel-submit" id="disabled-button" onClick={this.handleClick} disabled >Create Channel</button>) : 
                <button className="channel-submit" onClick={this.handleClick} >Create Channel</button>
              }
              <button className="channel-cancel" onClick={this.props.closeModal} >Cancel</button>
            </div>
          </form>
        </div>
        <div onClick={this.props.closeModal} className="esc-container"><i className="fas fa-times"></i>esc</div>
      </div>
    )
  }
}

export default CreateChannelForm;