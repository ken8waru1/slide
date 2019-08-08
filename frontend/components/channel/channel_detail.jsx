import React from 'react';

class ChannelDetail extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubscribe = this.handleSubscribe.bind(this);
    this.infoStatus = this.props.infoStatus;
    this.state = {
      subscribeCount: this.props.subscribeCount
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentDidMount() {
    this.props.fetchChannel(this.props.match.params.channelId).then(action =>
      this.setState({ subscribeCount: action.channel.subscribeCount})
    );
    this.props.openInfoBar('open');
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.channelId != prevProps.match.params.channelId) {
      this.props.fetchChannel(this.props.match.params.channelId).then(action => {
        return (
        this.setState({subscribeCount: action.channel.subscribeCount})
        )
      }
      )
    }
  }

  handleDelete(e) {
    e.preventDefault();
    let subId;
    this.props.subscriptions.forEach(subscription => {
      if (subscription.channelId == this.props.channel.id) {
        subId = subscription.id
      }
    });

    this.props.deleteSubscription(subId);
    this.setState({ subscribeCount: this.state.subscribeCount -= 1 });
  }

  handleSubscribe(e) {
    e.preventDefault();
    this.props.createSubscription({ current_user: this.props.currentUser, channel_id: this.props.channel.id })
    this.setState({subscribeCount: this.state.subscribeCount += 1})
  }

  handleToggle() {
    if (this.props.infoStatus) {
      this.props.closeInfoBar();
    } else {
      this.props.openInfoBar('open');
    }
  }
  
  render () {
    if (!this.props.channel) {
      return(
        <></>
      )
    }

    const subbedChannels = this.props.subscriptions.map(subscription => subscription.channelId)

    return (
      <div className="chat-header">
        <div className="chat-header-info">{`#${this.props.channel.name}`}
          <div>
            <i className="far fa-user"></i>
            <span className="subscriber-count">{this.state.subscribeCount}</span>
          </div>
        </div>
        <div className="details-right">
          {this.props.channel.isDirectMessage ? <></> :
            <div className="info-toggle" onClick={this.handleToggle} >
              <div className={this.props.infoStatus === 'open' ? 'active-info' : 'inactive-info'}>
                <div className="info-wrapper"><i className={`fas fa-info-circle info-circle--${ this.props.infoStatus === 'open' ? 'open' : 'closed'}` }></i></div>
              </div>
            </div>
          }
          {!this.props.channel.isDirectMessage ?
          this.props.channel && subbedChannels.includes(this.props.channel.id) ?
            <div className="delete-sub-btn-container">
              <button className="delete-sub-btn" onClick={this.handleDelete}>Leave Channel</button>
            </div> :
            <div className="sub-btn-container">
              <button className="sub-btn" onClick={this.handleSubscribe}>Join Channel</button>
            </div>
          : <></>
          }
        </div>
      </div>
    )
  }
}
  
export default ChannelDetail