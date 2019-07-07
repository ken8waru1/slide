import React from 'react';

class CreateChannelForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <div className="channel-form-container">
          <h1>Create a Channel</h1>
          <p>Channels are where your members try communicate (TRY). They're best when there's a topic and everyone completely ignores it.</p>
          <form>
            <label><div>Name</div>
              <input type="text" />
            </label>
          </form>
        </div>
      </div>
    )
  }
}

export default CreateChannelForm;