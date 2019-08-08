import React from 'react';
import SearchIndexItem from './search_index_item';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      purpose: '',
      creator_id: this.props.currentUser.id,
      is_direct_message: true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, user) {
    e.preventDefault();
    const channelParams = Object.assign({}, this.state, { name: user.displayName });
    const subbedChannels = this.props.subscriptions.map(subscription => subscription.channelId);
    const channelNames = this.props.channels.map(channel => channel.name);
    const directMessages = this.props.channels.filter(channel => channel.isDirectMessage && subbedChannels.includes(channel.id)).map(channel => channel.name);
    const existingDM = directMessages.includes(user.displayName) ? channelNames.indexOf(user.displayName) : -1;
    if (existingDM > -1) {
      this.props.closeModal();
      return (
        this.props.history.push(`/channels/${this.props.channels[existingDM].id}`)
      );
    } else {
      this.setState({ name: user.displayName + this.props.currentUser.displayName });
      this.props.createChannel(channelParams).then(channelInfo => {
        this.props.closeModal();
        this.props.createSubscription({ user_id: user.id, channel_id: channelInfo.channel.id });
        this.props.fetchSubscriptions();
        this.props.fetchChannel(channelInfo.channel.id)
        return (
          this.props.history.push(`/channels/${channelInfo.channel.id}`)
        )
      })
    }
  }

  updateField(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    };
  }

  render() {
    const userResults = this.props.users.filter(user => user.displayName.includes(this.state.displayName) && user.id !== this.props.currentUser.id);
    return (
      <div className="search-container">
        <h1 className="create-dm-header">Direct Messsages</h1>
        <input className="dm-input" type="text" onChange={this.updateField('displayName')} value={this.state.displayName} placeholder="Search for a user" />
        {userResults.map(user => <SearchIndexItem key={user.id} user={user} handleClick={this.handleClick} />)}
      </div>
    )
  }
}

export default Search;