import React from 'react';

class ModeSwitcher extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    const checked = event.target.checked;
    
    if (checked) {
      document.getElementById('app').classList.add('night-mode');
    } else {
      document.getElementById('app').classList.remove('night-mode');
    }
  }

  render() {
    return (
      <label className="switch">
        <input type="checkbox" onChange={this.handleInputChange} />
        <span className="slider round"></span>
      </label>
    )
  }
}

export default ModeSwitcher;