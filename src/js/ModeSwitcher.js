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

      localStorage.setItem('mode', 'night-mode');      
    } else {
      document.getElementById('app').classList.remove('night-mode');

      if (localStorage.getItem('mode') != null) {
        localStorage.setItem('mode', '');
      }
    }
  }

  render() {
    let checked = false;

    if (localStorage.getItem('mode') != null) {
      if (localStorage.getItem('mode') == 'night-mode') {
        checked = true;
      }
    }

    return (
      <label className="switch" title="Switch Mode">
        <input id="switch" type="checkbox" onChange={this.handleInputChange} defaultChecked={checked} />
        <span className="slider round"></span>
      </label>
    )
  }
}

export default ModeSwitcher;