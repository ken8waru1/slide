import React from 'react';
import SearchContainer from './search_container';

class CreateDMForm extends React.Component {
  constructor(props) {
    super(props);
  }

  updateField(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  render() {
    return (
      <div className="dm-contents-container">
        <div className="dm-form-container">
          <div onClick={this.props.closeModal} className="esc-container"><i className="fas fa-times"></i>esc</div>
          <SearchContainer />
        </div>
      </div>
    )
  }
}

export default CreateDMForm;