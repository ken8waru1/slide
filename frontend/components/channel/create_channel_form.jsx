import React from 'react';

class CreateChannelForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <form>
          <label>
            <input type="text" />
          </label>
        </form>
      </div>
    )
  }
}

export default CreateChannelForm;