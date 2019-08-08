import React from 'react';
import MemberIndexItem from './member_index_item';

class InfoBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: false,
      members: false
    }
    this.updateStatus = this.updateStatus.bind(this);
  }

  updateStatus(status) {
    const otherStatus = status === 'details' ? 'members' : 'details';
    this.setState({ [status]: !this.state[status] });
  }

  render() {


    const { channel, users } = this.props;
    const channelSubscriptions = channel.subscriptions.map(subscription => subscription.user_id);
    const subscribedUsers = users.filter(user => channelSubscriptions.includes(user.id));
    
    if (channel.isDirectMessage) {
      return null;
    }

    return (
      <div className={`infobar-container-${this.props.infoBar ? 'active' : 'inactive'}`} >
        <div className="infobar">
            <div className="about-channel">
              <div className="about-channel-header">About this channel</div>
            </div>
          <div className='channel-details-wrapper'>
            <div className={`channel-details-${this.state.details ? 'open' : 'collapsed'}`} onClick={() => this.updateStatus('details')}>
              <div className="channel-details-container">
                <div className="channel-details-header">
                  <i className="fas fa-info-circle info-circle--bar"></i> Channel Details
                </div>
                <div className="caret-container"><i className={ `fas fa-caret-${this.state.details ? 'down' : 'right' }`}></i></div>
              </div>
            </div>
            <div className={this.state.details ? 'channel-details-expanded' : 'hidden-details'}>
              <div className="cd-expanded">
                <div className="cd-expanded-header">
                  Name
                </div>
                <div className="cd-expanded-name">
                  # {channel.name}
                </div>
                <div className="cd-expanded-header">
                  Purpose
                  <div className="cd-expanded-name">
                    {channel.purpose ? channel.purpose : 'Nothing set yet!'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='channel-details-wrapper'>
            <div className={`channel-details-${this.state.members ? 'open' : 'collapsed'}`} onClick={() => this.updateStatus('members')}>
              <div className="channel-details-container">
                <div className="channel-details-header">
                  <i className="far fa-user info--user"></i>{channel.subscribeCount} Member{channel.subscribeCount > 1 ? 's' : ''}
                </div>
                <div className="caret-container"><i className={ `fas fa-caret-${this.state.members ? 'down' : 'right' }`}></i></div>
              </div>
            </div>
            <div className={this.state.members ? 'channel-details-expanded' : 'hidden-details'}>
              <div className="cd-expanded">
                { subscribedUsers.map(user => <MemberIndexItem key={user.id} user={user} />) }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default InfoBar;